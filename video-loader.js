/*
   YouTube Video Loader for Leo Veranga's Portfolio
   Author: Manus AI
   Date: April 23, 2025
*/

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Function to optimize YouTube video loading
    function setupYouTubeVideos() {
        const videoContainers = document.querySelectorAll('.video-wrapper');
        
        videoContainers.forEach(container => {
            const iframe = container.querySelector('iframe');
            
            if (iframe && iframe.src.includes('youtube.com/embed')) {
                // Add parameters for better performance
                if (!iframe.src.includes('?')) {
                    iframe.src = iframe.src + '?rel=0&modestbranding=1';
                } else {
                    iframe.src = iframe.src + '&rel=0&modestbranding=1';
                }
                
                // Add lazy loading attribute
                iframe.loading = 'lazy';
            }
        });
    }
    
    // Initialize YouTube video optimization
    setupYouTubeVideos();
});
