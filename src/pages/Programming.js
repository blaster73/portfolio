import Card from "../components/layout/ui/Card";
import ProjectItem from "../components/layout/ProjectItem";

function Programming() {
  return (
    <section>
      <h1>Programming Projects</h1>
      <li>
        <ProjectItem
          image="https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
          title="Project Title"
          description="Test Description"
        />
      </li>
    </section>
  );
}

export default Programming;
