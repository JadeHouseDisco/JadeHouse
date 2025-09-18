const nextConfig = {
  env: {
    SENDGRID_API_KEY: process.env.RESEND_API_KEY,
  },
  images: {
    domains: ['github.com', 'res.cloudinary.com'],
  },
};

module.exports = nextConfig;