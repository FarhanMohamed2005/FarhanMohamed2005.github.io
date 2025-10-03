// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project details data
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

// Internship details data
const internshipDetails = {
    internship1: {
        title: "Gateway Software Solutions - Gen AI with Python Intern",
        duration: "June 2025 – July 2025",
        location: "Coimbatore, India",
        description: `
            <h3>Internship Overview</h3>
            <p>Completed an intensive 21-day internship focused on Generative AI technologies and Python programming, gaining hands-on experience with cutting-edge AI tools and techniques.</p>
            
            <h3>Key Responsibilities & Achievements</h3>
            <ul>
                <li>Developed expertise in NLP models, tokenization, and prompt engineering techniques</li>
                <li>Built an AI Career Counselor chatbot using Google's Gemini API and Streamlit framework</li>
                <li>Explored text and image generation using diffusion models and fine-tuning concepts</li>
                <li>Gained hands-on experience with OpenAI APIs and sentiment analysis</li>
                <li>Implemented RAG (Retrieval-Augmented Generation) architectures</li>
                <li>Worked on real-world AI projects with practical applications</li>
            </ul>
            
            <h3>Technical Skills Acquired</h3>
            <ul>
                <li>Advanced Python programming for AI applications</li>
                <li>Generative AI model implementation and fine-tuning</li>
                <li>API integration and management</li>
                <li>Prompt engineering and optimization</li>
                <li>Natural Language Processing techniques</li>
            </ul>
            
            <h3>Impact & Learning</h3>
            <p>This intensive internship provided deep insights into the practical applications of Generative AI in real-world scenarios, enhancing both technical skills and understanding of AI's potential in solving business problems.</p>
        `
    },
    internship2: {
        title: "Webgen - Web Development Intern",
        duration: "2024",
        location: "Remote",
        description: `
            <h3>Internship Overview</h3>
            <p>Completed a comprehensive web development internship focusing on modern web technologies and industry best practices, gaining practical experience in full-stack development.</p>
            
            <h3>Key Responsibilities & Achievements</h3>
            <ul>
                <li>Worked on modern web development projects using current technologies</li>
                <li>Gained experience in both frontend and backend development</li>
                <li>Learned industry-standard development practices and workflows</li>
                <li>Collaborated on team projects and code reviews</li>
                <li>Implemented responsive web designs and user interfaces</li>
                <li>Worked with version control systems and deployment processes</li>
            </ul>
            
            <h3>Technical Skills Developed</h3>
            <ul>
                <li>HTML5, CSS3, and JavaScript programming</li>
                <li>Responsive web design principles</li>
                <li>Web development frameworks and libraries</li>
                <li>Version control with Git</li>
                <li>Web deployment and hosting</li>
                <li>Cross-browser compatibility testing</li>
            </ul>
            
            <h3>Professional Growth</h3>
            <p>This internship provided valuable industry experience, enhancing both technical web development skills and professional work practices in a collaborative development environment.</p>
        `
    }
};

// Function to show project details
function showProjectDetails(projectId) {
    const modal = document.getElementById('projectModal');
    const detailsContainer = document.getElementById('projectDetails');
    const project = projectDetails[projectId];
    
    if (project) {
        detailsContainer.innerHTML = `
            <h2>${project.title}</h2>
            <p><strong>Year:</strong> ${project.year}</p>
            <p><strong>Technologies:</strong> ${project.technologies}</p>
            <div class="project-detail-content">
                ${project.description}
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Function to show internship details
function showInternshipDetails(internshipId) {
    const modal = document.getElementById('internshipModal');
    const detailsContainer = document.getElementById('internshipDetails');
    const internship = internshipDetails[internshipId];
    
    if (internship) {
        detailsContainer.innerHTML = `
            <h2>${internship.title}</h2>
            <p><strong>Duration:</strong> ${internship.duration}</p>
            <p><strong>Location:</strong> ${internship.location}</p>
            <div class="internship-detail-content">
                ${internship.description}
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Function to close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const projectModal = document.getElementById('projectModal');
    const internshipModal = document.getElementById('internshipModal');
    
    if (event.target == projectModal) {
        closeModal('projectModal');
    }
    if (event.target == internshipModal) {
        closeModal('internshipModal');
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal('projectModal');
        closeModal('internshipModal');
    }
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'white';
        navbar.style.backdropFilter = 'none';
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
