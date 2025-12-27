import './MeetTheTeam.css';

// Team member data organized by department
const teamData = {
  board: [
    { name: 'Phil Harrington', title: 'Founder & Chair', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Roger Milliken', title: 'Director', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    { name: 'John Roten', title: 'Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Jonathan Hoo', title: 'Director', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face' },
    { name: 'Denny Elart', title: 'Director', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face' },
    { name: 'Alyssa D\'Ercole', title: 'Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
  ],
  management: [
    { name: 'Phil Harrington', title: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Laura Davies', title: 'Chief Operating Officer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face' },
    { name: 'Ahmad', title: 'General Manager, Product', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    { name: 'Kaylen Speaks', title: 'Director, Marketing & Communications', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face' },
  ],
  technology: [
    { name: 'Alvin Ceballos', title: 'Developer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Abdullah Faisien', title: 'Full-stack Web Developer', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face' },
    { name: 'Reno Kristan', title: 'Full-stack Developer', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face' },
    { name: 'Jon Lebowitz', title: 'iOS and Android Developer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Antonio Sounds', title: 'Web Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    { name: 'Tamara Donahua', title: 'UX Engineer', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face' },
  ],
  product: [
    { name: 'Angel Borella', title: 'Lead UI Designer', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face' },
  ],
  privacySecurity: [
    { name: 'Joseph Manning', title: 'Security & Privacy Officer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  ],
  marketing: [
    { name: 'Dean Soukeras', title: 'VP Digital Marketing', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Hillery Kim', title: 'Director, Marketing Data Analyst', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Marcelo Costa', title: 'Marketing, Real Estate Strategies', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face' },
  ],
  legal: [
    { name: 'Garret Pike', title: 'Legal Advisor', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  ],
  humanResources: [
    { name: 'Minkubing', title: 'HR Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face' },
    { name: 'Norolhayati', title: 'HR Support', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Zuri Armitage', title: 'HR Admin', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
    { name: 'Crisolyn Martins', title: 'HR Outreach', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face' },
    { name: 'Erica Adams', title: 'HR Recruiter', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face' },
    { name: 'Sarah Wire', title: 'HR Assistant', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face' },
  ],
  development: [
    { name: 'Austin Rosen', title: 'Grant Writer', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Roshaay Kanyinda', title: 'Sr. Development Officer', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  ],
  programs: [
    { name: 'Lucas Santos', title: 'HHP Hosting Manager', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    { name: 'Bill Nguyen', title: 'Associate Director, Continuing Development', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face' },
    { name: 'Priyanshu', title: 'Associate, Healthcare Experience', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face' },
    { name: 'Chris Matthews', title: 'HHP Global Data Analyst', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Ana Olivares', title: 'Engagement Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face' },
    { name: 'Selingtina', title: 'Nutrition Strategies Coordinator', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face' },
    { name: 'Amanda Lagata', title: 'Director, Women\'s Health Education', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
    { name: 'Solenzo Alidin', title: 'Senior PM, Global Health', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  ],
};

// Reusable TeamMember component
const TeamMember = ({ name, title, image }) => (
  <div className="team-member">
    <div className="team-member__image-wrapper">
      <img src={image} alt={name} className="team-member__image" />
    </div>
    <h4 className="team-member__name">{name}</h4>
    <p className="team-member__title">{title}</p>
  </div>
);

// Reusable TeamSection component
const TeamSection = ({ title, members }) => (
  <section className="team-section">
    <h3 className="team-section__title">{title}</h3>
    <div className="team-section__grid">
      {members.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  </section>
);

export default function MeetTheTeam() {
  return (
    <div className="section">
      <div className="container">
        {/* Page Header */}
        <header className="team-header">
          <h1 className="team-header__title">Meet the Team Behind Human Health Project</h1>
          <p className="team-header__description">
            HHP&apos;s team consists of a group of talented and dedicated individuals from all walks of life who have a strong interest in helping people help themselves achieve optimal health and quality of life through peer-to-peer health information, education, and support for those in need. Our team is comprised primarily of volunteers who believe in the value of sharing their individually-acquired health information with others, as well as a small number of advisers.
          </p>
        </header>

        {/* Team Sections */}
        <TeamSection title="Board" members={teamData.board} />
        <TeamSection title="Management" members={teamData.management} />
        <TeamSection title="Technology" members={teamData.technology} />
        <TeamSection title="Product" members={teamData.product} />
        <TeamSection title="Privacy & Security Council" members={teamData.privacySecurity} />
        <TeamSection title="Marketing and Membership" members={teamData.marketing} />
        <TeamSection title="Legal" members={teamData.legal} />
        <TeamSection title="Human Resources" members={teamData.humanResources} />
        <TeamSection title="Development/Donor Relations" members={teamData.development} />
        <TeamSection title="Programs" members={teamData.programs} />

        {/* Footer Links */}
        <div className="team-links">
          <a href="#program-council" className="team-links__link">Program Council &gt;&gt;</a>
          <a href="#advisory-board" className="team-links__link">Advisory Board &gt;&gt;</a>
        </div>
      </div>
    </div>
  );
}