export const generateToken = (user, message, statusCode, res) => 
  {
    try {
      // Generate the JWT token
      const token = user.generateJsonWebToken();
      
      // Get cookie expiration value (fallback to 7 days if not set)
      const cookieExpireDays = process.env.COOKIE_EXPIRE || 7;
  
      // Set token in HTTP cookie
      res
        .status(statusCode)
        .cookie("token", token, {
          expires: new Date(Date.now() + cookieExpireDays * 24 * 60 * 60 * 1000),
          httpOnly: true, // Cookie cannot be accessed via JavaScript
        })
        .json({
          success: true,
          message,
          user, // Be careful not to send sensitive user data
          token,
        });
    } catch (error) {
      // If JWT generation fails, send an error response
      res.status(500).json({ success: false, message: "Token generation failed." });
    }
  };
