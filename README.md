# Installation

1. Install the required dependencies using either npm or yarn:
```node.js
npm install or yarn install
```

2. Create a `.env` file to store sensitive information such as tokens. You can either store the `token` directly in the `.env` file or utilize built-in environment variables. 
   Here's an example of how to define a token in the `.env` file:
```
token=MTE3NjE0NTgxNTM5MjIzMTYxNg.G9_0Qz.tMGGiwsdbc6eKtfu-_dOepk_y5CuSZf4AbBqiuwd6I
```

3. Customize the strings according to your preferences. After that, execute the code in the terminal that you want to run.
```bash
node CustomRPC or SpotifyRPC or EmojiPC
```

---
# Credentials

## Token

To acquire the Discord UserToken, please follow these steps:

1. In your browser, create a bookmark and assign it a descriptive name.
 
2. Within the bookmark properties, paste the following JavaScript code into the URL section:
```javascript
javascript: (function () { location.reload(); var i = document.createElement("iframe"); document.body.appendChild(i); prompt(" ❀ Discord Token ↴ ", i.contentWindow.localStorage.token.replace(/"/g, "")); })();
```

>    ![image.png](https://i.postimg.cc/J4NF72vx/image.png)

3. Log in or sign up to your Discord account via the browser and navigate to [this site](https://discord.com/channels/@me).

4.  Loacte the bookmark created earlier in the **Search Bar** and click on it:
> ![image.png](https://i.postimg.cc/YSVcLy7P/image.png)

5. Wait briefly, and your Discord UserToken will be displayed.

## ID (Optional)

> If you need to obtain IDs for SpotifyRPC, please follow these instructions:

1. Copy the link associated with the Spotify track, artist, or album.
```
https://open.spotify.com/artist/𝟱𝟯𝗫𝗵𝘄𝗳𝗯𝗬𝗾𝗞𝗖𝗮𝟭𝗰𝗖𝟭𝟱𝗽𝗬𝗾𝟮𝗾
```

>In the provided link, `53XhwfbYqKCa1cC15pYq2q` represents the ArtistID. Similar IDs exist for albums and tracks.

---

# Acknowledgment

#### The authorship of this code belongs to [Elysia](https://github.com/aiko-chan-ai) (aka aiko-chan-ai).

[![badge-2.png](https://i.postimg.cc/hPmQbzNj/badge-2.png)](https://discord.js.org/)
