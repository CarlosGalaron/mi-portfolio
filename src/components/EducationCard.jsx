export default function EducationCard({ edu }) {
  return (
    <pre className="bg-gray-800 p-4 rounded-lg mb-2 overflow-x-auto">
      {`"${edu}"`}
    </pre>
  );
}
