import React from 'react';

export default function HowToHelp() {

  const pageTitle = "HOW TO HELP";
  const introText = "We are extremely grateful to all our amazing team members, volunteers, advisers, board members and funders who allow us to continue Human Health Project's (HHP) mission while remaining independent, integrative and unbiased.";

  const aboutParagraph1 = "HHP's foundation is built upon peer-to-peer health information, education, and support. Through our programs, our objective is to empower individuals locally and globally to manage their health. We are made up of a small core staff with 80+ volunteers, 30+ board members and advisers, spread around the world.";
  const aboutParagraph2 = "At Human Health Project, there are many ways to support our mission—whether you are an individual, professional, organization, or funder. We are a global, volunteer-powered nonprofit dedicated to improving health literacy, patient advocacy, and access to trustworthy, people-centered health information. At the heart of our work is a diverse community of patients, caregivers, clinicians, researchers, and advocates who believe lived experience and shared knowledge can transform how people navigate their health.";
  const aboutParagraph3 = "By joining our community, volunteering your skills, contributing expertise, funding our work, or partnering with us, you help advance a more human, connected, and equitable healthcare experience. Together, we are building a Unified Patient Experience (UPE) that brings health education, peer support, advocacy, and real-world evidence into one integrated ecosystem—empowering people everywhere to make informed decisions and feel less alone on their health journeys.";

  const donateButtonText = "MAKE A FINANCIAL GIFT";

  const volunteerTitle = "Volunteer";
  const volunteerPlatforms = [
    {
      name: "CommunityNI",
      location: "(Northern Ireland Based)",
      image: "https://humanhealthproject.org/wp-content/uploads/2025/10/CommunityNI-logo-e1761060872175.jpg",
    },
    {
      name: "Idealist / VolunteerMatch",
      location: "(US Based)",
      image: "https://humanhealthproject.org/wp-content/uploads/2023/09/idealist_logo.webp",
    },
    {
      name: "Be Collective",
      location: "(Northern Ireland based)",
      image: "https://humanhealthproject.org/wp-content/uploads/2023/09/becollective_logo.webp",
    },
  ];

  const supportersTitle = "Our Supporters";
  const supporters = [
    { name: "Cole-Crone Family Foundation", logo: "" },
    { name: "ChildLife", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_childlife_logo-400x124.webp" },
    { name: "Gerald Herman", logo: "" },
    { name: "Google", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_2000px-Google_logo-400x135.webp" },
    { name: "Microsoft", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_Microsoft_logo-400x85.webp" },
    { name: "Salesforce", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_salesforce_logo.webp" },
    { name: "Notion", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_notion_logo-400x400.webp" },
    { name: "Amazon", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_Amazon_logo-400x121.webp" },
    { name: "WordPress", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_WordPress_logo-400x91.webp" },
    { name: "SAS", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_SAS_logo-400x164.webp" },
    { name: "VolunteerMatch", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_SAS_logo-400x164.webp" },
    { name: "Zoom", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_zoom_logo-400x90.webp" },
    { name: "Atlassian", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_Atlasian_logo-400x127.webp" },
    { name: "DocHub", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_DocHub_logo-400x95.webp" },
    { name: "Sendy", logo: "https://humanhealthproject.org/wp-content/uploads/2023/08/supporter_sendy-logo.webp" },
    { name: "UptimeRobot", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/uptimerobot-logo-300x92-1.webp" },
    { name: "CoPort", logo: "https://humanhealthproject.org/wp-content/uploads/2024/08/CoPort_Logo-1-400x400.png" },
  ];


  return (
    <div style={styles.pageWrapper}>
      <section style={styles.headerSection}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>{pageTitle}</h1>
          <p style={styles.introText}>{introText}</p>
        </div>
      </section>

      <section style={styles.aboutSection}>
        <div style={styles.containerWide}>
          <div style={styles.aboutGrid}>
            <div style={styles.aboutContent}>
              <p style={styles.aboutParagraph}>{aboutParagraph1}</p>
              <p style={styles.aboutParagraph}>{aboutParagraph2}</p>
              <p style={styles.aboutParagraph}>{aboutParagraph3}</p>
            </div>
            <div style={styles.aboutImageContainer}>
              <img
                src="https://humanhealthproject.org/wp-content/uploads/2023/09/how-to-help-large-image-1200x796.webp"
                alt="Mother and Child"
                style={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <button style={styles.donateButton}>{donateButtonText}</button>
        </div>
      </section>

      {/* Volunteer Section */}
      <section style={styles.volunteerSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>{volunteerTitle}</h2>
          <div style={styles.volunteerGrid}>
            {volunteerPlatforms.map((platform, index) => (
              <div key={index} style={styles.volunteerCard}>
                <img
                  src={platform.image}
                  alt={`${platform.name} logo`}
                  style={styles.volunteerLogo}
                />
                <p style={styles.volunteerName}>{platform.name}</p>
                <p style={styles.volunteerLocation}>{platform.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section style={styles.supportersSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>{supportersTitle}</h2>
          <div style={styles.supportersGrid}>
            {supporters.map((supporter, index) => (
              <div key={index} style={styles.supporterItem}>
                {supporter.logo ? (
                  <img
                    src={supporter.logo}
                    alt={`${supporter.name} logo`}
                    style={styles.supporterLogo}
                  />
                ) : (
                  <span style={styles.supporterName}>{supporter.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  // Page Wrapper
  pageWrapper: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    color: '#333',
    backgroundColor: '#fff',
    lineHeight: 1.6,
  },

  // Containers
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
  },
  containerWide: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 40px',
  },

  // Header Section
  headerSection: {
    padding: '60px 0 40px',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  pageTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#222',
    marginBottom: '20px',
    letterSpacing: '1px',
  },
  introText: {
    fontSize: '15px',
    color: '#555',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.7,
  },

  // About Section
  aboutSection: {
    padding: '40px 0 60px',
    backgroundColor: '#fff',
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '50px',
    alignItems: 'start',
  },
  aboutContent: {
    paddingRight: '20px',
  },
  aboutParagraph: {
    fontSize: '14px',
    color: '#444',
    marginBottom: '20px',
    textAlign: 'justify',
    lineHeight: 1.75,
  },
  aboutImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutImage: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover',
  },

  // CTA Section
  ctaSection: {
    padding: '40px 0',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  donateButton: {
    backgroundColor: '#0077CC',
    color: '#fff',
    border: 'none',
    padding: '14px 50px',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },

  // Volunteer Section
  volunteerSection: {
    padding: '60px 0',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '26px',
    fontWeight: '600',
    color: '#222',
    marginBottom: '40px',
  },
  volunteerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  volunteerCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  volunteerLogo: {
    width: '120px',
    height: '60px',
    objectFit: 'contain',
    marginBottom: '15px',
  },
  volunteerName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '5px',
  },
  volunteerLocation: {
    fontSize: '13px',
    color: '#666',
  },

  // Supporters Section
  supportersSection: {
    padding: '60px 0 80px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  supportersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '30px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
    alignItems: 'center',
  },
  supporterItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 10px',
  },
  supporterName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#555',
  },
  supporterLogo: {
    maxWidth: '100px',
    maxHeight: '50px',
    objectFit: 'contain',
  },
};