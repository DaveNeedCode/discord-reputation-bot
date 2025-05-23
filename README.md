# 🤖 Discord Reputation Bot

A powerful Discord bot for managing user reputation with a beautiful web dashboard!

## ✨ Features

### 🎯 Bot Commands
- **`+rep @user`** - Give reputation to someone
- **`-rep @user`** - Remove reputation (Admin only)
- **`!rep @user`** - Check someone's reputation
- **`!repboard`** - Show top 10 users leaderboard

### 📊 Web Dashboard
- Real-time bot status monitoring
- Reputation statistics and leaderboards
- Activity logs and user management
- Responsive design with dark/light mode

### 🛡️ Security Features
- Rate limiting (max 3 reps per minute)
- Admin-only negative reputation commands
- Secure token management
- Input validation and error handling

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Discord Bot Token
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/discord-reputation-bot.git
cd discord-reputation-bot
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Discord Bot**
   - Go to [Discord Developer Portal](https://discord.com/developers/applications)
   - Create new application and bot
   - Copy the bot token
   - Invite bot to your server with appropriate permissions

4. **Configure Environment Variables**
```bash
# Add your Discord bot token
DISCORD_BOT_TOKEN=your_discord_bot_token_here
```

5. **Run the application**
```bash
npm run dev
```

6. **Access the dashboard**
   - Open http://localhost:5000 in your browser
   - Monitor bot status and reputation stats

## 🔧 Deployment

### Deploy to Render (Recommended)

1. **Push to GitHub**
2. **Connect Render to your GitHub repo**
3. **Add Environment Variables in Render:**
   - `DISCORD_BOT_TOKEN`: Your Discord bot token
4. **Deploy and enjoy 24/7 uptime!**

### Keep Bot Online 24/7 (Free)
- Use [UptimeRobot](https://uptimerobot.com) to ping your deployed URL
- Setup HTTP monitoring every 5 minutes
- Ping endpoint: `https://your-app-url.onrender.com/health`

## 🛠️ Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **Frontend**: React, Vite, TailwindCSS
- **Bot**: Discord.js
- **UI Components**: Shadcn/ui, Lucide Icons
- **Storage**: In-memory (easily replaceable with database)

## 📝 Bot Permissions Required

Make sure your bot has these permissions:
- Send Messages
- Read Message History
- Use Slash Commands
- Mention Everyone

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Support

If you find this project helpful, please give it a ⭐ on GitHub!

For issues and questions, please open an issue in the repository.

---

Made with ❤️ for the Discord community