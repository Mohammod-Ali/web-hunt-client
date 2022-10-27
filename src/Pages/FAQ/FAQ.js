import React from "react";
import { Card } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="container mt-4 mb-5">
        <h2>Some Frequently Asked Question:</h2>
      <Card body className="border m-3 p-3 text-center">
        <h3>Why should you lean Web development?</h3>
        <p>
          Web development has a number of pros: High earning potential,
          opportunity for growth, and flexibility are usually top of mind for
          most who get into the industry. Some of the challenges for people who
          pursue web development is the competitive nature of the job market.
        </p>
      </Card>
      <Card body className="border m-3 p-3 text-center">
        <h3>Why should you learn HTML?</h3>
        <p>
          Learning how to code allows you to bring out your personality on your
          own website, enables you to stand out from the crowd, contribute to
          projects better, helps you understand and explore other languages and
          provides you with an opportunity to transition into a different
          career.
        </p>
      </Card>
      <Card body className="border m-3 p-3 text-center">
        <h3>Why should you lean CSS?</h3>
        <p>
          Not only is it a basic requirement if you want to become a Web
          Developer, but you'll use it daily on every webpage you work on in
          this field. CSS is also useful for people who may never build a web
          application.
        </p>
      </Card>
      <Card body className="border m-3 p-3 text-center">
        <h3>Why should you learn Bootstrap?</h3>
        <p>
          If you plan to make your living by building websites, learning
          Bootstrap will save you a ton of time and trouble. The free CSS
          framework encompasses a massive library of reusable HTML, CSS and
          JavaScript code — once you have it, you won't need to spend valuable
          hours programming common web page elements from scratch.
        </p>
      </Card>
      <Card body className="border m-3 p-3 text-center">
        <h3>Why should you learn JavaScript?</h3>
        <p>
          JavaScript supports valuable skills such as object-oriented,
          functional, and imperative styles of programming. Beginner developers,
          in turn, can apply these skills to any new language they want to
          learn, like Python, Java, or C++.
        </p>
      </Card>
      <Card body className="border m-3 p-3 text-center">
        <h3>Why should you learn React?</h3>
        <p>
          In English You might choose to learn React for many reasons. For one,
          it has a fast learning curve for new developers. If you're not an
          expert web developer, React can be an easy way to introduce yourself
          to a lot of HTML, CSS and JS concepts all at the same time.
        </p>
      </Card>
    </div>
  );
};

export default FAQ;
