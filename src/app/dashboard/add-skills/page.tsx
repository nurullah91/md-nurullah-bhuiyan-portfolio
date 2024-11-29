import AddSkillsForm from "@/components/Forms/AddSkillsForm";

export default function AddSkillsPage() {
  return (
    <div>
      <div className="w-11/12 md:w-3/4 lg:w-1/2 mx-auto my-10 bg-blue-50 px-6 py-10 shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-blue-800 mb-5">
          Add a new skills
        </h2>

        <AddSkillsForm />
      </div>
    </div>
  );
}