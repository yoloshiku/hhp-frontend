export default function Home() {
  const whyCards = [
    {
      id: 1,
      className: 'advocacy',
      title: 'Patient Advocacy + Online Workshops',
      description: 'Join our online workshops to learn how to advocate for yourself and help others with their healthcare journeys. Get the skills and knowledge to navigate the healthcare system.',
      link: '/patient-advocacy',
      imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2023/09/patient-advocacy-1.webp'
    },
    {
      id: 2,
      className: 'shared',
      title: 'Shared Patient Information',
      description: 'Our Shared Patient Information (SPI) Program allows patients to share their health data securely. We help you understand how to use and benefit from sharing information.',
      link: '/shared-patient-info',
      imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2023/09/homepage_laptop_with_hand-1024x683.webp'
    },
    {
      id: 3,
      className: 'caregiver',
      title: 'Learning Academy',
      description: 'The Learning Academy is designed for anyone interested in becoming an empowered patient, empowered caregiver or those seeking to understand patient engagement and patient-centered care.',
      link: '/caregiver-academy',
      imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2023/09/patient-education_2-1-1024x683.webp'
    }
  ];

  const involvementCards = [
    {
      id: 1,
      className: 'donate',
      title: 'Donate',
      link: '/donate',
      imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2023/09/homepage_flowers_in_hand.webp'
    },
    {
      id: 2,
      className: 'support',
      title: 'Support HHP',
      link: '/support',
      imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2023/09/homepage_all_hands_in.webp'
    },
    {
      id: 3,
      className: 'partner',
      title: 'Partner with Us',
      link: '/partner',
      imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2023/09/partner-1-1-1024x683.webp'
    },
    {
      id: 4,
      className: 'volunteer',
      title: 'Volunteer',
      link: '/volunteer',
      imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2023/09/homepage_coffee_shop-1024x683.webp'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="video-container">
              <div className="video-thumbnail">
                <iframe
                  className="video-background"
                  src="https://www.youtube.com/embed/JxZLRnaZ4LI?autoplay=1&mute=1&loop=1&playlist=JxZLRnaZ4LI&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1"
                  title="Stop Type 2 Diabetes Before It Starts"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
                {/* <span className="video-badge">Stop Type 2 Diabetes Before It Starts Campaign</span> */}
                {/* <div className="video-headline">
                  <span>STOP</span>
                  <span>TYPE 2</span>
                  <span>DIABETES</span>
                  <span className="video-subtitle">BEFORE IT STARTS</span>
                </div> */}
                <a
                  href="https://www.youtube.com/watch?v=JxZLRnaZ4LI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="youtube-badge"
                >
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="currentColor">
                    <path d="M19.615 2.184c-.228-.853-.896-1.526-1.743-1.756C16.29 0 10 0 10 0S3.71 0 2.128.428c-.847.23-1.515.903-1.743 1.756C0 3.768 0 7 0 7s0 3.232.385 4.816c.228.853.896 1.526 1.743 1.756C3.71 14 10 14 10 14s6.29 0 7.872-.428c.847-.23 1.515-.903 1.743-1.756C20 10.232 20 7 20 7s0-3.232-.385-4.816zM8 10V4l5.196 3L8 10z" fill="#FF0000"/>
                  </svg>
                  Watch on YouTube
                </a>
              </div>
            </div>
            <div className="support-card">
              <h2>Support &quot;Stop Type 2 Diabetes Before It Starts&quot;</h2>
              <div className="fundraising-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '15%' }}></div>
                </div>
                <p className="progress-text">
                  <strong>$4,715</strong> raised of $50,000 goal · 31 donations
                </p>
              </div>
              <div className="support-buttons">
                <a href="/donate" className="btn btn-primary">Donate Now</a>
                <a href="#" className="btn btn-green">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  GoFundMe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Peer-to-Peer Section */}
      <section className="section why-section">
        <div className="container">
          <h2 className="section-title">Why Peer-to-Peer Healthcare?</h2>
          <div className="cards-grid">
            {whyCards.map((card) => (
              <div key={card.id} className="info-card">
                <div className={`card-image ${card.className}`}>
                  <img src={card.imageUrl} alt={card.title} />
                </div>
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <a href={card.link} className="btn btn-primary btn-small">Learn More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Image Section */}
      <section className="feature-image-section">
        <div className="feature-overlay">
          <div className="container">
            <div className="feature-content">
              {/* This section displays a large hero image of healthcare professionals */}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section impact-section">
        <div className="container">
          <div className="impact-content">
            <h2>Our Impact Peer to Peer Program</h2>
            <p>
              When facing a difficult health situation, we need information, education, and support. 
              We need accurate, unbiased, user-friendly information to help best deal with our health issues. 
              We need access to education to be able to better understand and manage our conditions and how 
              our healthcare system works (locally). We need support when we are vulnerable, to be shown the way, 
              to be heard and to know our rights and all our treatment options.
            </p>
            <p>
              WHY HHP? We solve this problem by providing information, education and support. Information is 
              provided through our Shared Patient Information (SPI) Program. Education is provided through our 
              Patient Education programs and support is provided through HHP&apos;s Patient Advocacy. The combination 
              of these elements empowers individuals to take control and navigate their health care well.
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section get-involved-section">
        <div className="container">
          <div className="involvement-grid">
            {involvementCards.map((card) => (
              <a key={card.id} href={card.link} className={`involvement-card ${card.className}`}>
                <div className="involvement-card-overlay">
                  <h3>{card.title}</h3>
                </div>
                <img src={card.imageUrl} alt={card.title} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <p className="cta-text">Empower others to change their lives and change your own in the process</p>
          <div className="cta-box">
            <p>Our programs empower people with tools to be part of a clear path to a healthier, better lifestyle, better health.</p>
            <a href="/join" className="btn btn-join">Join Us</a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Subscribe to our newsletter</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country *</label>
                <select id="country" required>
                  <option value="AF">Afghanistan</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Hero Section */
        .hero-section {
          background: #f5f5f5;
          padding: 40px 0;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .video-container {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .video-thumbnail {
          padding: 30px;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          border: 0;
        }


        .video-badge {
          background: #0066a1;
          color: white;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 11px;
          display: inline-block;
          margin-bottom: 15px;
          width: fit-content;
          position: relative;
          z-index: 2;
        }

        .video-headline {
          color: white;
          font-size: 32px;
          font-weight: 700;
          line-height: 1.2;
          position: relative;
          z-index: 2;
        }

        .video-headline span {
          display: block;
        }

        .video-subtitle {
          font-size: 18px !important;
          font-weight: 400 !important;
          margin-top: 10px;
        }

        .youtube-badge {
          position: absolute;
          bottom: 15px;
          left: 15px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 2;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.3s;
        }

        .youtube-badge:hover {
          background: rgba(0, 0, 0, 0.9);
        }

        .support-card {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .support-card h2 {
          font-size: 22px;
          color: #333;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .fundraising-progress {
          margin-bottom: 20px;
        }

        .progress-bar {
          height: 8px;
          background: #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 10px;
        }

        .progress-fill {
          height: 100%;
          background: #0066a1;
          border-radius: 4px;
        }

        .progress-text {
          font-size: 14px;
          color: #666;
        }

        .progress-text strong {
          color: #333;
        }

        .support-buttons {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        /* Why Section */
        .why-section {
          padding: 60px 0;
        }

        .section-title {
          text-align: center;
          font-size: 28px;
          color: #333;
          margin-bottom: 40px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .info-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        .card-image {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .card-image.advocacy {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
        }

        .card-image.shared {
          background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
        }

        .card-image.caregiver {
          background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
        }

        .card-content {
          padding: 20px;
        }

        .card-content h3 {
          font-size: 16px;
          color: #333;
          margin-bottom: 10px;
        }

        .card-content p {
          font-size: 13px;
          color: #666;
          margin-bottom: 15px;
          line-height: 1.5;
        }

        /* Feature Image Section */
        .feature-image-section {
          width: 100%;
          height: 400px;
          background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
            url(https://humanhealthproject.org/wp-content/uploads/2023/09/volunteer-1-1024x683.webp);
          background-size: cover;
          background-position: center;
        }

        /* Impact Section */
        .impact-section {
          background: #0066a1;
          padding: 60px 0;
          color: white;
        }

        .impact-content {
          text-align: center;
        }

        .impact-content h2 {
          font-size: 28px;
          margin-bottom: 25px;
          color: white;
        }

        .impact-content p {
          font-size: 14px;
          line-height: 1.8;
          max-width: 900px;
          margin: 0 auto 15px;
          opacity: 0.95;
          color: white;
        }

        /* Get Involved Section */
        .get-involved-section {
          padding: 60px 0;
          background: white;
        }

        .involvement-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .involvement-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          height: 280px;
          display: block;
          text-decoration: none;
        }

        .involvement-card.donate {
          background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%);
        }

        .involvement-card.support {
          background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
        }

        .involvement-card.partner {
          background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
        }

        .involvement-card.volunteer {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
        }

        .involvement-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .involvement-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(0, 102, 161, 0.9);
          padding: 15px 20px;
          z-index: 1;
        }

        .involvement-card-overlay h3 {
          color: white;
          font-size: 18px;
          margin: 0;
        }

        /* CTA Section */
        .cta-section {
          padding: 40px 0;
          text-align: center;
          background: white;
        }

        .cta-text {
          font-size: 18px;
          color: #333;
          margin-bottom: 25px;
          font-style: italic;
        }

        .cta-box {
          background: #0066a1;
          border-radius: 8px;
          padding: 20px 30px;
          display: inline-flex;
          align-items: center;
          gap: 20px;
          max-width: 500px;
        }

        .cta-box p {
          color: white;
          font-size: 13px;
          text-align: left;
          margin: 0;
        }

        /* Newsletter Section */
        .newsletter-section {
          padding: 40px 0;
          background: white;
        }

        .newsletter-content {
          max-width: 500px;
          margin: 0 auto;
        }

        .newsletter-title {
          text-align: center;
          font-size: 14px;
          color: #333;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          font-size: 12px;
          color: #333;
          margin-bottom: 5px;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }

        /* Buttons */
        .btn {
          padding: 10px 20px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary {
          background: #0066a1;
          color: white;
        }

        .btn-primary:hover {
          background: #004d7a;
        }

        .btn-green {
          background: #00b964;
          color: white;
        }

        .btn-green:hover {
          background: #009952;
        }

        .btn-small {
          padding: 8px 16px;
          font-size: 12px;
        }

        .btn-join {
          background: #00b964;
          color: white;
          white-space: nowrap;
        }

        .btn-join:hover {
          background: #009952;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .hero-content {
            grid-template-columns: 1fr;
          }

          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }

          .involvement-grid {
            grid-template-columns: 1fr;
          }

          .cta-box {
            flex-direction: column;
            text-align: center;
          }

          .cta-box p {
            text-align: center;
          }
        }
      `}</style>
    </>
  )
}