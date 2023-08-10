import { useForm } from "react-hook-form";
import { useCreateInspection } from "../../api/create-inspection";
import { CreateInspectionData } from "../../types";
import { InputField } from "@/components/form";
import { Button } from "@/components/button";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/router";

//move to features
type CreateInspectionFormProps = {
  onSuccess: () => void;
};

export function CreateInspectionForm({ onSuccess }: CreateInspectionFormProps) {
  const router = useRouter();
  const createInspection = useCreateInspection({ onSuccess });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateInspectionData>();

  const onSubmit = (data: CreateInspectionData) => {
    createInspection.submit({ data });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Name"
        type="text"
        {...register("name", { required: "Please provide name" })}
      />
      <ErrorMessage errors={errors} name="name" />
      <InputField
        label="Installation type"
        type="text"
        {...register("installationType", {
          required: "Please provide installatio type",
        })}
      />
      <ErrorMessage errors={errors} name="installationType" />
      <InputField
        label="Construction year"
        type="text"
        {...register("constructionYear", {
          required: "Please provide construction year",
        })}
      />
      <ErrorMessage errors={errors} name="constructionYear" />

      <InputField
        label="Company"
        type="text"
        {...register("company", {
          required: "Please provide company",
        })}
      />
      <ErrorMessage errors={errors} name="company" />

      <InputField
        label="Type"
        type="text"
        {...register("type", {
          required: "Please provide type",
        })}
      />
      <ErrorMessage errors={errors} name="type" />

      <InputField
        label="Diameter"
        type="text"
        {...register("diameter", {
          required: "Please provide diameter",
        })}
      />
      <ErrorMessage errors={errors} name="diameter" />

      <InputField
        label="Material"
        type="text"
        {...register("material", {
          required: "Please provide material",
        })}
      />
      <ErrorMessage errors={errors} name="material" />

      <InputField
        label="Coating"
        type="text"
        {...register("coating", {
          required: "Please provide coating",
        })}
      />
      <ErrorMessage errors={errors} name="coating" />

      <Button
        variant="outline"
        type="submit"
        disabled={createInspection.isLoading}
      >
        Create
      </Button>
      <Button
        variant="danger"
        type="button"
        disabled={createInspection.isLoading}
        onClick={() => router.back()}
      >
        Cancel
      </Button>
    </form>
  );
}