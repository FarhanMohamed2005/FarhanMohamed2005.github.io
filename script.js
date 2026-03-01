// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_bds3qyx';
const EMAILJS_TEMPLATE_ID = 'template_ven2m5p';
const EMAILJS_PUBLIC_KEY = 'XbfPURYmOe2Fr7nVf';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// Dark Mode Toggle
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Load theme on page load
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Project Details Data
const projectDetails = {
    project1: {
        title: "AI Career Counselor",
        year: "2025",
        technologies: "Python, Gemini API, Streamlit",
        description: `
            <h3>Project Overview</h3>
            <p>Developed an AI-powered career guidance chatbot during Gen AI internship at Gateway Solutions. This innovative application provides personalized career recommendations and guidance to users through intelligent conversation.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>Implemented advanced NLP techniques for natural user interaction</li>
                <li>Integrated Google's Gemini API for intelligent responses and career path suggestions</li>
                <li>Built using Streamlit framework for an intuitive user interface</li>
                <li>Provides personalized career recommendations based on user inputs</li>
                <li>Real-time chat interface with contextual understanding</li>
            </ul>
            
            <h3>Technical Implementation</h3>
            <p>The project leverages cutting-edge generative AI technologies to understand user queries and provide meaningful career guidance. The system uses prompt engineering techniques to ensure accurate and helpful responses.</p>
            
            <h3>Impact</h3>
            <p>This project demonstrates practical application of AI in career counseling, helping users make informed decisions about their professional paths through intelligent conversation and analysis.</p>
        `
    },
    project2: {
        title: "ClonePay Detector",
        year: "2024",
        technologies: "Mobile Development, Security Algorithms",
        description: `
            <h3>Project Overview</h3>
            <p>A security-focused mobile application designed to identify and alert users about potential fake or cloned payment apps during digital transactions. This critical security tool helps protect users from financial fraud.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>Real-time detection of suspicious payment applications</li>
                <li>Advanced security algorithms to identify cloned app behavior</li>
                <li>Instant alerts and warnings for potential threats</li>
                <li>Pattern recognition for detecting fraudulent app signatures</li>
                <li>User-friendly interface for easy monitoring</li>
            </ul>
            
            <h3>Technical Implementation</h3>
            <p>Developed sophisticated algorithms that analyze app behavior patterns, digital signatures, and other security markers to identify potentially dangerous payment applications. The system provides real-time monitoring and immediate alerts.</p>
            
            <h3>Security Impact</h3>
            <p>This application addresses the growing concern of payment app cloning and financial fraud, providing users with an additional layer of security during digital transactions.</p>
        `
    },
    project3: {
        title: "Timer and Cooldown Alerter App",
        year: "2023",
        technologies: "Mobile Development, Notification Systems",
        description: `
            <h3>Project Overview</h3>
            <p>A lightweight productivity tool designed to help users manage timed tasks, rest intervals, and cooldown periods effectively. This application enhances time management and productivity through intelligent alerts.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>Customizable timer settings for various activities</li>
                <li>Intelligent notification system with multiple alert types</li>
                <li>User-friendly interface for easy time management</li>
                <li>Multiple timer support for concurrent activities</li>
                <li>Progress tracking and statistics</li>
            </ul>
            
            <h3>Technical Implementation</h3>
            <p>Built with focus on performance and reliability, featuring efficient background processing and precise timing mechanisms. The notification system ensures users never miss important intervals.</p>
            
            <h3>Productivity Impact</h3>
            <p>This tool helps users maintain focus, manage work-rest cycles effectively, and improve overall productivity through structured time management.</p>
        `
    },
    project4: {
        title: "AgriDoctor - AI-driven Sustainable Agriculture",
        year: "2024-2025",
        technologies: "Flutter, TensorFlow Lite, Flask, Google Speech API, Dialogflow",
        description: `
            <h3>Project Overview</h3>
            <p>An innovative mobile-based offline AI platform designed specifically for rural farmers, providing comprehensive agricultural support including plant disease diagnosis, regional language voice chatbot, weather-based SMS alerts, and monthly crop planning.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>Offline-first architecture for areas with limited internet connectivity</li>
                <li>AI-powered plant disease detection using computer vision</li>
                <li>Voice-enabled chatbot with regional language support</li>
                <li>Weather-based SMS alert system for farming risks</li>
                <li>Region and month-specific crop planning recommendations</li>
                <li>Expert agricultural guidance accessible to small and marginal farmers</li>
            </ul>
            
            <h3>Technical Innovation</h3>
            <p>The solution leverages open-source technologies including Flutter for cross-platform mobile development, TensorFlow Lite for on-device AI inference, and Google Speech API for voice interaction. The system is designed to work effectively even in low-connectivity rural environments.</p>
            
            <h3>Social Impact</h3>
            <p>This project empowers small and marginal farmers with expert agricultural guidance, potentially enhancing crop yields and promoting sustainable farming practices. The offline-first approach ensures accessibility in remote rural areas where internet connectivity is limited.</p>
            
            <h3>Unique Value Proposition</h3>
            <p>Unlike existing AgriTech applications, this solution prioritizes offline functionality and voice-first interaction with regional language support, making it truly accessible to rural farming communities.</p>
        `
    }
};

// Show Project Details
function showProjectDetails(projectId) {
    const modal = document.getElementById('projectModal');
    const detailsContainer = document.getElementById('projectDetails');
    const project = projectDetails[projectId];
    
    if (project) {
        detailsContainer.innerHTML = `
            <h2>${project.title}</h2>
            <p><strong>Year:</strong> ${project.year}</p>
            <p><strong>Technologies:</strong> ${project.technologies}</p>
            <div style="margin-top: 30px;">
                ${project.description}
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close Modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal('projectModal');
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal('projectModal');
    }
});

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            const templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                to_email: 'mohamedfarhan15029@gmail.com'
            };
            
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
                .then(function(response) {
                    showFormMessage('✓ Message sent successfully! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                })
                .catch(function(error) {
                    console.error('Email error:', error);
                    showFormMessage('Failed to send message. Please try again.', 'error');
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                });
        });
    }
});

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}
