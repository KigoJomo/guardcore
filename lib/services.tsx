// lib/services.tsx

import { Cpu, Group, MessageSquare, Shield, Wifi, Zap } from 'lucide-react';

export interface Service {
  title: string;           
  slug: string;            
  content: string;         
  features: string[];      
  industries: string[];    
  certifications: string[];
  successStory: string;    
  icon: React.ReactNode;   
  image: string;           
  keywords: string[];      
}

export const services: Service[] = [
  {
    title: 'Integrated Security Solutions',
    slug: 'integrated-security-solutions',
    content:
      'Comprehensive security systems including AI-powered surveillance, intrusion detection, and biometric access control.',
    features: [
      'AI-powered CCTV surveillance',
      'Intrusion detection systems',  
      'Advanced biometric and RFID access control',
      'Perimeter security solutions', 
      'Centralized monitoring systems',
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
    icon: <Shield size={32} color="#2563EB" />,
    image: 'integrated-security.webp',
    keywords: ['CCTV', 'Intrusion Detection', 'Access Control'],
  },
  {
    title: 'Centralised Control and Command Centers',
    slug: 'centralised-control-command-centers',
    content:
      'High-tech command centers for seamless security, communication, and operational oversight.',
    features: [
      'Unified security and surveillance management',
      '24/7 real-time monitoring and incident response',
      'AI-powered analytics for anomaly detection',
      'Integration with access control and alarms',
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
    icon: <Cpu size={32} color="#2563EB" />,
    image: 'centralised-control.webp',
    keywords: ['Real-Time Monitoring', 'Centralized Oversight'],
  },
  {
    title: 'Networking and ICT Solutions',
    slug: 'networking-ict-solutions',
    content:
      'Enterprise-grade networking solutions ensuring businesses stay connected, secure, and efficient.',
    features: [
      'High-speed fiber optic and copper LAN',
      'Enterprise-grade wireless networking',  
      'Network security and firewall solutions',
      'Cloud infrastructure deployment',         
      'VoIP and unified communications systems', 
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
    icon: <Wifi size={32} color="#2563EB" />,
    image: 'networking-and-ict.webp',
    keywords: ['Networking', 'ICT', 'Connectivity'],
  },
  {
    title: 'Communication Systems',
    slug: 'communication-systems',
    content:
      'Robust communication systems that facilitate seamless connectivity, collaboration, and real-time information exchange.',
    features: [
      'IP Telephony and PABX Systems',               
      'Video conferencing solutions with HD clarity',
      'VHF/UHF and GSM 3G/4G radio communication networks',
      'Secure communication channels for sensitive data',
      'Scalable solutions tailored to organizational needs',
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
    icon: <MessageSquare size={32} color="#2563EB" />,
    image: 'comms.webp',
    keywords: ['IP Telephony', 'Video Conferencing', 'Radio Communications'],
  },
  {
    title: 'Power, Electrical and Electromechanical Solutions',
    slug: 'power-electrical-electromechanical-solutions',
    content:
      'Turnkey power, electrical, and electromechanical solutions ensuring reliable and efficient energy management.',
    features: [
      'Supply and installation of generators, UPS systems, and battery banks',
      'High and low voltage electrical systems for diverse applications',     
      'Solar energy solutions for sustainable power management',             
      'Precision cooling systems for data centers and telecom infrastructure', 
      'Preventive maintenance and 24/7 technical support',                     
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
    icon: <Zap size={32} color="#2563EB" />,
    image: 'power.webp',
    keywords: ['Generators', 'UPS Systems', 'Solar Energy', 'Electrical Installations'],
  },
  {
    title: 'IP Telephony Conferencing Solutions',
    slug: 'ip-telephony-conferencing-solutions',
    content:
      'Robust, scalable telephony and conferencing systems ensuring clear, uninterrupted communication across all business channels.',
    features: [
      'IP Telephony and PABX Systems',               // Modern voice systems for crisp communication
      'Conference room Audio and Video Solutions',    // Enables high-quality meetings
      'Seamless integration with unified communications platforms', // Integrates with existing systems
    ],
    industries: [
      'Corporate Enterprises',
      'Call Centers',
      'Educational Institutions',
      'Government Organizations',
    ],
    certifications: [
      'Licensed telecommunications service provider (CAK)',
      'Partners with Ericsson and Cisco',
      'Compliant with international communication standards',
    ],
    successStory:
      'A major corporation enhanced its global communications efficiency by 40% using our telephony conferencing solutions.',
    icon: <Group size={32} color="#2563EB" />, // New icon for telephony solutions
    image: 'conferencing.webp',       // Image representing this service
    keywords: ['IP Telephony', 'Conferencing', 'PABX', 'Unified Communications'],
  },
  // add IP Telephony Conferencing Solutions
    // - IP Telephony and PABX Systems
    // - Conference room Audio and Video Solutions
];