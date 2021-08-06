import classes from './starting-page.module.css';

function StartingPageContent() {
  // Show Link to Login page if NOT auth

  return (
    <section className={classes.starting}>
      <h1>Welcome to the all purpose next app</h1>
    </section>
  );
}

export default StartingPageContent;
