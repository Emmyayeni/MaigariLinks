# Favicon Setup - Maigari Links

## ✅ What's Been Done

I've set up a professional favicon system for your website using your Maigari Links branding!

## 📁 Files Created:

1. **`app/icon.tsx`**
   - Generates a 32x32 favicon with "ML" initials
   - Uses your brand gradient (blue to purple)
   - Automatically served at `/icon`

2. **`app/apple-icon.tsx`**
   - Generates a 180x180 Apple touch icon
   - Same gradient branding
   - Used when users add your site to iOS home screen

3. **`app/layout.tsx`** (Updated)
   - Added Open Graph metadata for social sharing
   - Configured metadata base URL

## 🎨 Favicon Design:

Your favicon features:
- **"ML"** initials (Maigari Links)
- **Gradient background**: Blue (#1e40af) to Purple (#7c3aed)
- **White text**: Bold and clear
- **Rounded corners**: 20% border radius for modern look

## 🚀 How It Works:

Next.js automatically:
1. Generates the favicon at build time
2. Creates multiple sizes (16x16, 32x32, etc.)
3. Serves them at the correct paths
4. Adds proper meta tags to HTML

## 📱 Where You'll See It:

✅ **Browser tab** - 32x32 icon with "ML"
✅ **Bookmarks** - When users bookmark your site
✅ **iOS Home Screen** - When users add to iPhone/iPad home screen
✅ **Android Home Screen** - When users add to Android home screen
✅ **Browser history** - In browser history lists

## 🧪 Testing:

### Step 1: Restart your dev server
```powershell
# Stop current server (Ctrl+C)
# Then restart:
pnpm dev
```

### Step 2: Clear browser cache
- Chrome/Edge: Press `Ctrl+Shift+Delete`
- Or use hard refresh: `Ctrl+F5`

### Step 3: Check the favicon
- Look at your browser tab
- You should see "ML" with a blue-purple gradient

### Step 4: Test on mobile
- Open the site on your phone
- Add to home screen
- Check the icon

## 🔄 Alternative Option: Use Your Logo Image

If you prefer to use your actual logo image instead of the "ML" initials:

### Option A: Replace the generated icon with logo

Update `app/icon.tsx`:

```tsx
import fs from 'fs'
import path from 'path'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  // Return your logo image
  const logoPath = path.join(process.cwd(), 'public', 'logo-dark.png')
  const logoBuffer = fs.readFileSync(logoPath)
  return new Response(logoBuffer, {
    headers: {
      'Content-Type': 'image/png',
    },
  })
}
```

### Option B: Use static favicon file

1. Create a square version of your logo (512x512 recommended)
2. Use an online tool to convert to .ico format:
   - https://favicon.io/
   - https://realfavicongenerator.net/
3. Save as `app/favicon.ico`
4. Delete `app/icon.tsx` and `app/apple-icon.tsx`
5. Next.js will automatically use `favicon.ico`

## 🎨 Customization:

Want to change the design? Edit `app/icon.tsx`:

```tsx
// Change colors
background: 'linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%)'

// Change text
ML → Your initials or symbol

// Change size
fontSize: 24 → your preferred size

// Change shape
borderRadius: '20%' → '50%' for circle, '0%' for square
```

## 📊 SEO Benefits:

Your favicon now helps with:
- ✅ Brand recognition
- ✅ Professional appearance
- ✅ Better user experience
- ✅ Social media sharing (Open Graph)
- ✅ Mobile home screen icons

## 🔍 Technical Details:

Next.js automatically generates:
- `favicon.ico` - Legacy browsers
- `icon.png` - Modern browsers
- `apple-touch-icon.png` - iOS devices
- Proper `<link>` tags in HTML `<head>`

All from your `icon.tsx` and `apple-icon.tsx` files!

---

Your site now has a professional favicon that matches your brand! 🎉
