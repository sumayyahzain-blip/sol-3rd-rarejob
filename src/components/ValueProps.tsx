const ValueProps = () => {
  return (
    <section className="value-props">
      <h2>English Learning That Fits Your Life</h2>

      <div className="value-props-grid">
        {/* Students */}
        <div className="value-card">
          <h3>Personalized Learning Paths</h3>
          <p>
            Learn at your pace with lessons matched to your goals, level,
            and schedule.
          </p>
        </div>

        <div className="value-card">
          <h3>Verified Professional Tutors</h3>
          <p>
            Learn with experienced teachers who are carefully screened
            and continuously reviewed.
          </p>
        </div>

        <div className="value-card">
          <h3>Simple & Flexible Scheduling</h3>
          <p>
            Book lessons in minutes and study anytime, anywhere.
          </p>
        </div>

        {/* Tutors */}
        <div className="value-card tutor">
          <h3>Teach Globally, Work Flexibly</h3>
          <p>
            Connect with motivated learners from Japan, no matter where
            you live.
          </p>
        </div>

        <div className="value-card tutor">
          <h3>Fair & Transparent System</h3>
          <p>
            Clear ratings, honest feedback, and equal opportunities to grow.
          </p>
        </div>

        <div className="value-card tutor">
          <h3>Professional Teaching Support</h3>
          <p>
            We provide onboarding, tools, and guidance to help you succeed
            long-term.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
