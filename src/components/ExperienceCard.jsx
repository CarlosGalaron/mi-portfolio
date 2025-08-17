export default function ExperienceCard({ exp }) {
  return (
    <pre className="bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto">
      {`{
  role: "${exp.role}",
  years: "${exp.years}",
  description: "${exp.description}"
}`}
    </pre>
  );
}
