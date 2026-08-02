# AlphauroraE.github.io

### Mobile Changes:
NavBar (NavBar.jsx + NavBar.css)                                                                                                                               
  - Added a hamburger menu button that appears on screens ≤768px                                                                                                 
  - Full-screen mobile menu with gradient background slides in from the right                                                                                    
  - Menu closes when clicking a link                                                                                                                             
  - Body scroll is disabled when menu is open                                                                                                                    
                                                                                                                                                                 
  Home Page (Home.css)                                                                                                                                           
  - Content stacks vertically on mobile (photo above text)                                                                                                       
  - Banner height and typography scales down                                                                                                                     
  - Photo size increases relative to viewport on small screens                                                                                                   
  - Section padding reduced for mobile                                                                                                                           
  - News items stack date above text                                                                                                                             
  - BibTeX blocks wrap text to prevent overflow                                                                                                                  
                                                                                                                                                                 
  Projects Page (Projects.css)                                                                                                                                   
  - Grid becomes single column on mobile                                                                                                                         
  - Reduced padding on small screens                                                                                                                             
                                                                                                                                                                 
  Polaroid Cards (Polaroid.css)                                                                                                                                  
  - Cards scale to fit container width on mobile                                                                                                                 
                                                                                                                                                                 
  Global Styles (index.css + NavBar.css)                                                                                                                         
  - Added 480px breakpoint for smallest screens                                                                                                                  
  - Footer spacing adjusted for mobile  


### Publication Page:

Visual Design:                                                                                                                                                 
  - Deep purple/navy gradient background with subtle star particles                                                                                              
  - Cards with glassmorphism effect (semi-transparent with blur)                                                                                                 
  - Purple glow effect on hover with a slight lift animation                                                                                                     
                                                                                                                                                                 
  Features:                                                                                                                                                      
  - Publication type badges (Conference Paper, Poster)                                                                                                           
  - Expandable abstracts with fade-in animation                                                                                                                  
  - Copy BibTeX button with "Copied!" feedback                                                                                                                   
  - DOI link button                                                                                                                                              
  - Clickable titles linking to the paper                                                                                                                        
                                                                                                                                                                 
  Responsive: Adapts nicely to mobile screens                                                                                                                    
                                                                                                                                                                 
  Note: I added placeholder abstracts since they weren't in the home page data. You can update them with the actual abstracts from your papers. The page is at   
  /publications based on your existing routing.    

### Experience Page:
Visual Design:                                                                                                                                                 
  - Dusk gradient background (warm pink/rose transitioning to dusty purple)                                                                                      
  - Floating cloud shapes with gentle animation                                                                                                                  
  - Glassmorphism cards with soft shadows                                                                                                                        
  - Warm pink glow effect on hover                                                                                                                               
                                                                                                                                                                 
  Structure:                                                                                                                                                     
  - Horizontal timeline at the top showing key milestones (2021-2026)                                                                                            
  - Stacked sections with icons: Education, Research, Teaching & Mentorship, Leadership, Skills                                                                  
  - Expandable cards with chevron indicator that rotates when expanded                                                                                           
                                                                                                                                                                 
  Content (placeholder - update as needed):                                                                                                                      
  - Education: PhD at VT, BS at UCF                                                                                                                              
  - Research: Xrai Lab GRA, UCF undergrad research                                                                                                               
  - Teaching: Python workshops, research workshop facilitator                                                                                                    
  - Leadership: CHCI VP, iXR Ideathon organizer                                                                                                                  
  - Skills: Programming, ML/AI, VR/XR, Tools categories with tags                                                                                                
                                                                                                                                                                 
  Interactive Elements:                                                                                                                                          
  - Click any card to expand/collapse the description                                                                                                            
  - Smooth fade-in animation for descriptions                                                                                                                    
  - Hover effects with glow and lift on all cards and skill tags                                                                                                 
                                                                                                                                                                 
  The page is mobile responsive with the timeline adapting to a grid layout on smaller screens.

  ### Photography Page:

  Star Background:                                                                                                                                               
  - Stars are now denser at the top (using quadratic distribution)                                                                                               
  - 30% of stars have a gentle twinkling animation                                                                                                               
  - Parallax effect - the star background moves slower than the content as you scroll                                                                            
  - Shooting stars preserved from your original design                                                                                                           
                                                                                                                                                                 
  Photo Grid:                                                                                                                                                    
  - Masonry layout (3 columns desktop, 2 tablet, 1 mobile)                                                                                                       
  - Photos glow white on hover                                                                                                                                   
  - Subtle scale effect on hover                                                                                                                                 
  - Captions appear on hover (always visible on mobile)                                                                                                          
                                                                                                                                                                 
  Lightbox:                                                                                                                                                      
  - Click any photo to view full-size                                                                                                                            
  - Navigation arrows to browse through photos                                                                                                                   
  - Keyboard support: Escape to close, arrow keys to navigate                                                                                                    
  - Caption displayed below the photo                                                                                                                            
                                                                                                                                                                 
  Placeholder Content:                                                                                                                                           
  - I added 6 placeholder landscape photos from Unsplash with sample captions                                                                                    
  - Replace the PHOTOS array with your actual images when ready                                                                                                  
                                                                                                                                                                 
  The page reflects more personality with the dreamy night sky aesthetic. You can add your own photos by updating the PHOTOS array in Fun.jsx with your image    
  paths and captions. 

  ### Music Page:
  My Understanding                                                                                                                                               
                                                                                                                                                                 
  Layout:                                                                                                                                                        
  - Cassettes arranged on the left and right sides of the screen                                                                                                 
  - Central cassette player/boombox as the focal point                                                                                                           
  - Spotify playlist embedded seamlessly below the player                                                                                                        
  - Cassettes feature album art/playlist covers on their label area                                                                                              
                                                                                                                                                                 
  Functionality:                                                                                                                                                 
  - Clickable cassettes that are selectable                                                                                                                      
  - Sliding animation when a cassette is inserted into the player                                                                                                
  - Playlist updates to match the selected cassette                                                                                                              
  - Playable Spotify embed integration                                                                                                                           
                                                                                                                                                                 
  Visual Style:                                                                                                                                                  
  - 80s aesthetic color scheme                                                                                                                                   
  - Cassettes styled like the reference image (colorful, varied designs with the classic tape shape, spools, and label areas)                                    
                                                                                                                                                                 
  ---                                                                                                                                                            
  Additional Ideas                                                                                                                                               
                                                                                                                                                                 
  Visual Enhancements:                                                                                                                                           
  - Synthwave gradient background - pink/purple/cyan sunset with a grid floor pattern, very iconic 80s                                                           
  - Neon glow effects - subtle glow on the selected cassette and player buttons                                                                                  
  - Retro typography - pixelated or VCR-style fonts for labels                                                                                                   
  - Scanlines overlay - subtle CRT TV effect for authenticity                                                                                                    
  - Cassette hover effect - slight tilt/lift with shadow, as if you're picking it up                                                                             
                                                                                                                                                                 
  Cassette Player Details:                                                                                                                                       
  - Spinning tape reels when a playlist is playing                                                                                                               
  - LED "PLAY" indicator light                                                                                                                                   
  - VU meter bars that react (or simulate reacting) to music                                                                                                     
  - Physical-looking buttons (play, stop, eject)                                                                                                                 
  - An "eject" animation when switching cassettes                                                                                                                
                                                                                                                                                                 
  Interaction Polish:                                                                                                                                            
  - Current cassette glows or has a "selected" border                                                                                                            
  - Empty cassette slot in the player that visually receives the tape                                                                                            
  - Cassettes could slightly wiggle on hover like they're eager to be picked                                                                                     
                                                                                                                                                                 
  Content Organization:                                                                                                                                          
  - Each cassette = a different mood/vibe playlist (e.g., "Late Night Coding", "Road Trip Vibes", "Chill Study")                                                 
  - Handwritten-style playlist names on the cassette labels 



  Visual Design:                                                                                                                                                 
  - Synthwave gradient background (purple to pink to orange sunset)                                                                                              
  - Retro sun with horizontal line effect                                                                                                                        
  - Neon glow effects on title, cassettes, and player                                                                                                            
  - Press Start 2P retro pixel font for labels, Permanent Marker for handwritten cassette names                                                                  
                                                                                                                                                                 
  Cassettes:                                                                                                                                                     
  - Styled after the reference image with colored bodies, white labels, tape windows, reels, and authentic details                                               
  - Wiggle animation on hover                                                                                                                                    
  - Glow effect on hover                                                                                                                                         
  - Fade when selected/in player                                                                                                                                 
  - Handwritten-style playlist names                                                                                                                             
                                                                                                                                                                 
  Cassette Player:                                                                                                                                               
  - "RETRO SOUND RS-8000" branding                                                                                                                               
  - Green LED display showing cassette name and status                                                                                                           
  - Animated VU meter bars when playing                                                                                                                          
  - Deck slot that receives cassettes with slide-in animation                                                                                                    
  - Spinning tape reels when playing                                                                                                                             
  - Red LED "PLAY" indicator                                                                                                                                     
  - Eject animation when switching cassettes                                                                                                                     
                                                                                                                                                                 
  Spotify Integration:                                                                                                                                           
  - Embedded playlist below the player                                                                                                                           
  - Updates seamlessly when selecting different cassettes                                                                                                        
                                                                                                                                                                 
  Layout:                                                                                                                                                        
  - Left and right cassette racks                                                                                                                                
  - Central player section                                                                                                                                       
  - Responsive for mobile                                                                                                                                        
                                                                                                                                                                 
  The page is at /music and added to the navbar. You'll want to replace the placeholder Spotify IDs in CASSETTES array with your actual playlist/album IDs. 


  1. Add imageUrl to each cassette in the CASSETTES array with the album/playlist cover URL                                                                      
  2. The image displays as the label background with a subtle dark overlay for readability                                                                       
  3. The title text turns white with a shadow when an image is present                                                                                           
  4. The cassette still looks like a cassette tape (body, reels, window, etc.)                                                                                   
                                                                                                                                                                 
  To get playlist/album cover images from Spotify:                                                                                                               
  - Right-click on the cover in Spotify desktop → "Copy image link"                                                                                              
  - Or screenshot/save and host the image yourself                                                                                                               
                                                                                                                                                                 
  Example usage:                                                                                                                                                 
  {                                                                                                                                                              
      id: 1,                                                                                                                                                     
      name: 'Late Night Coding',                                                                                                                                 
      spotifyId: '37i9dQZF1DX5trt9i14X7j',                                                                                                                       
      type: 'playlist',                                                                                                                                          
      color: '#e84393',                                                                                                                                          
      accentColor: '#fd79a8',                                                                                                                                    
      imageUrl: 'https://i.scdn.co/image/ab67706f000000...', // Add URL here                                                                                     
  },  

  I've redesigned the cassettes to match the reference image. The new design features:                                                                     
                                                                                                                                                                 
  1. Dark outer frame with corner screws (like the black border in the image)                                                                                    
  2. Main body area with the album art as background (this is where the colored/image area is)                                                                   
  3. White title strip at the top for the cassette name (like the label in the image)                                                                            
  4. Reel window - a dark rounded area with the two reels visible, overlaid on the album art                                                                     
                                                                                                                                                                 
  The album cover now shows through as the main body background, surrounding the reel window - just like in the reference image where the red color surrounds the
   tape mechanism.