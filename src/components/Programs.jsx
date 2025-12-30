import React from 'react';

export default function Programs() {
  const programs = [
    {
      title: "Patient Advocacy Workshops:",
      description: "Your generosity supports patient advocacy through Zoom workshops for Northern Ireland and Los Angeles. Gain confidence, understand your rights, and access healthcare resources while fostering a community of informed patients and allies.",
      linkTexts: ["Northern Ireland", "Los Angeles"],
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/patient-advocacy.jpg",
    },
    {
      title: "Learning Academy:",
      description: "The Learning Academy is designed for anyone interested in becoming an empowered patient, empowered caregiver, or those seeking to understand patient engagement and patient-centered care.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image.png",
    },
    {
      title: "Shared Patient Information Program:",
      description: "Support our Shared Patient Information Health surveys. We've collected data on Migraine and Lupus and with your help, we are actively working on adding more health conditions.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image-1.png",
    },
    {
      title: "Online Peer to Peer Events:",
      description: "These events, which typically include a Learning Academy course title, include patients and experts sharing their experience and knowledge.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image-3.png",
    },
    {
      title: "Dedicated Volunteers:",
      description: "The Human Health Project is made up of a small core staff with over 100 volunteers, 30+ board members, and advisers spread around the world. These dedicated volunteers are a vital part of our mission.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image-450x412.jpeg",
    },
    {
      title: "Local Partnerships:",
      description: "We forge local alliances to extend healthcare support to underserved communities, a cornerstone of our mission to empower individuals and enhance health outcomes.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image-1.jpeg",
    },
  ];

  return (
    <section style={styles.programsSection}>
      <div style={styles.programsGrid}>
        {programs.map((program, index) => (
          <div key={index} style={styles.programCard}>
            {program.image ? (
              <img src={program.image} alt={program.title} style={styles.programImage} />
            ) : (
              <div style={styles.programImagePlaceholder}>
                <span style={styles.programImageText}>📷</span>
              </div>
            )}
            <div style={styles.programContent}>
              <h3 style={styles.programTitle}>{program.title}</h3>
              <p style={styles.programDescription}>{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  programsSection: {
    marginTop: '60px',
    paddingTop: '40px',
    borderTop: '1px solid #eee',
  },
  programsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '30px',
  },
  programCard: {
    display: 'flex',
    gap: '15px',
    alignItems: 'flex-start',
  },
  programImage: {
    width: '120px',
    height: '80px',
    minWidth: '120px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  programImagePlaceholder: {
    width: '120px',
    height: '80px',
    minWidth: '120px',
    backgroundColor: '#e8e8e8',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  programImageText: {
    fontSize: '24px',
    color: '#999',
  },
  programContent: {
    flex: 1,
  },
  programTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#0077CC',
    marginBottom: '8px',
    marginTop: 0,
  },
  programDescription: {
    fontSize: '13px',
    color: '#555',
    lineHeight: 1.6,
    margin: 0,
    textAlign: 'justify',
  },
};
