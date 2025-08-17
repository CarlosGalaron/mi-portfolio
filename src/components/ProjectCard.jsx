export default function ProjectCard({ proj }) {
  return (
    <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
      {`{
  name: "${proj.name}",
  ${proj.link ? `link: "${proj.link}",` : ""}
  ${proj.frontend ? `frontend: "${proj.frontend}",` : ""}
  ${proj.backend ? `backend: "${proj.backend}",` : ""}
  ${proj.node ? `node: "${proj.node}",` : ""}
  ${proj.react ? `react: "${proj.react}"` : ""}
}`}
    </pre>
  );
}
