// lib/services.tsx

import { Cpu, MessageSquare, Shield, Wifi, Zap } from 'lucide-react';

// Define the Service interface to enforce a consistent structure for each service object
export interface Service {
  title: string;            // Display name for the service
  slug: string;             // URL-friendly identifier
  content: string;          // Short description of the service
  features: string[];       // Key features of the service
  industries: string[];     // Industries that benefit from the service
  certifications: string[]; // Certifications and compliance details
  successStory: string;     // A success story for credibility
  icon: React.ReactNode;    // Visual icon (from lucide-react)
  image: string;            // Filename of the service image
  keywords: string[];       // SEO keywords related to the service
}

// Define the list of services provided by Guardcore Technologies
export const services: Service[] = [
  {
    title: 'Integrated Security Solutions',
    slug: 'integrated-security-solutions',
    content:
      'Comprehensive security systems including AI-powered surveillance, intrusion detection, and biometric access control.',
    features: [
      'AI-powered CCTV surveillance', // Enhances monitoring using AI
      'Intrusion detection systems',   // Detects unauthorized access
      'Advanced biometric and RFID access control', // Provides secure authentication
      'Perimeter security solutions',  // Fencing, barriers, etc.
      'Centralized monitoring systems', // Holistic oversight integration
    ],
    industries: [
      'Corporate and Financial Institutions',
      'Government and Critical Infrastructure',
      'Industrial & Manufacturing Facilities',
      'Hospitality and Residential Estates',
    ],
    certifications: [
      'Certified partners with HikVision, HiD, and Cathexis',
      'Compliant with NCA security standards',
      'Adheres to CAK regulations',
    ],
    successStory:
      'A financial institution reduced security breaches by 60% with our AI-driven surveillance systems.',
    icon: <Shield size={32} color="#2563EB" />, // Icon representing security
    image: 'integrated-security.webp',
    keywords: ['CCTV', 'Intrusion Detection', 'Access Control'],
  },
  {
    title: 'Centralised Control and Command Centers',
    slug: 'centralised-control-command-centers',
    content:
      'High-tech command centers for seamless security, communication, and operational oversight.',
    features: [
      'Unified security and surveillance management', // Single platform for all systems
      '24/7 real-time monitoring and incident response', // Continuous oversight
      'AI-powered analytics for anomaly detection', // Uses AI to flag unusual activity
      'Integration with access control and alarms', // Consolidates various security functions
    ],
    industries: [
      'Transport and Logistics',
      'Smart Cities and Urban Infrastructure',
      'Healthcare Facilities',
      'Large Enterprise Campuses',
    ],
    certifications: [
      'Licensed by EPRA',
      'Compliance with International Security Standards',
      'Integration with ISO-certified emergency protocols',
    ],
    successStory:
      'A logistics company reduced cargo theft incidents by 45% using our centralized command centers.',
    icon: <Cpu size={32} color="#2563EB" />, // Icon representing control/technology
    image: 'centralised-control.webp',
    keywords: ['Real-Time Monitoring', 'Centralized Oversight'],
  },
  {
    title: 'Networking and ICT Solutions',
    slug: 'networking-ict-solutions',
    content:
      'Enterprise-grade networking solutions ensuring businesses stay connected, secure, and efficient.',
    features: [
      'High-speed fiber optic and copper LAN', // Fast, reliable network infrastructure
      'Enterprise-grade wireless networking',   // Secure and scalable WiFi solutions
      'Network security and firewall solutions', // Protects against cyber threats
      'Cloud infrastructure deployment',          // Supports modern cloud environments
      'VoIP and unified communications systems',  // Integrated voice and data solutions
    ],
    industries: [
      'Commercial Enterprises and Office Spaces',
      'Data Centers and Cloud Providers',
      'Educational Institutions',
      'Retail Businesses',
    ],
    certifications: [
      'Licensed by CAK',
      'Partners with Cisco, Oracle, and Motorola',
      'Adheres to best practices for data security',
    ],
    successStory:
      'A regional bank improved system uptime to 99.9% using our networking solutions.',
    icon: <Wifi size={32} color="#2563EB" />, // Icon representing networking/ICT
    image: 'networking-and-ict.webp',
    keywords: ['Networking', 'ICT', 'Connectivity'],
  },
  {
    title: 'Communication Systems',
    slug: 'communication-systems',
    content:
      'Robust communication systems that facilitate seamless connectivity, collaboration, and real-time information exchange.',
    features: [
      'IP Telephony and PABX Systems',                // Modern voice communication systems
      'Video conferencing solutions with HD clarity', // High-definition conferencing
      'VHF/UHF and GSM 3G/4G radio communication networks', // Reliable radio systems
      'Secure communication channels for sensitive data', // Enhanced security for communication
      'Scalable solutions tailored to organizational needs', // Customizable based on requirements
    ],
    industries: [
      'Corporate Enterprises and Call Centers',
      'Emergency Response and Security Agencies',
      'Educational Institutions and Training Facilities',
      'Government Ministries and Regulatory Bodies',
    ],
    certifications: [
      'Licensed telecommunications service provider (CAK)',
      'Partners with Ericsson, Matrix, and Cisco',
      'Adheres to industry-leading standards for secure communications',
    ],
    successStory:
      'A leading hospital chain integrated our communication systems across 10 locations, improving critical response times by 35%.',
    icon: <MessageSquare size={32} color="#2563EB" />, // Icon representing communication systems
    image: 'comms.webp',
    keywords: ['IP Telephony', 'Video Conferencing', 'Radio Communications'],
  },
  {
    title: 'Power, Electrical and Electromechanical Solutions',
    slug: 'power-electrical-electromechanical-solutions',
    content:
      'Turnkey power, electrical, and electromechanical solutions ensuring reliable and efficient energy management.',
    features: [
      'Supply and installation of generators, UPS systems, and battery banks', // Backup power solutions
      'High and low voltage electrical systems for diverse applications',      // Versatile electrical installations
      'Solar energy solutions for sustainable power management',              // Renewable energy options
      'Precision cooling systems for data centers and telecom infrastructure',  // Efficient cooling solutions
      'Preventive maintenance and 24/7 technical support',                      // Ongoing service and support
    ],
    industries: [
      'Manufacturing and Industrial Facilities',
      'Banking and Financial Institutions',
      'Data Centers and Telecommunications',
      'Government and Public Sector Infrastructure',
    ],
    certifications: [
      'Licensed by EPRA',
      'NCA certified electrical contractor',
      'Compliance with KPLC regulations',
    ],
    successStory:
      'A major data center achieved a 30% reduction in operational costs by deploying our energy solutions.',
    icon: <Zap size={32} color="#2563EB" />, // Icon representing power/electrical solutions
    image: 'power.webp',
    keywords: ['Generators', 'UPS Systems', 'Solar Energy', 'Electrical Installations'],
  },
];