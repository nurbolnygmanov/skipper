import { useForm } from "react-hook-form";
import { useCreateInspection } from "../../api/create-inspection";
import { CreateInspectionData } from "../../types";
import { InputField } from "@/components/form";
import { Button } from "@/components/button";
import { useRouter } from "next/router";
import styles from "./create-inspection.module.scss";

//move to features
type CreateInspectionFormProps = {
  onSuccess: () => void;
};

const defaultValues = {
  company: "Test ",
  coating: "Test",
  constructionYear: 2023,
  diameter: "Test",
  installationType: "Test",
  material: "Test",
  type: "Test",
};

export function CreateInspectionForm({ onSuccess }: CreateInspectionFormProps) {
  const router = useRouter();
  const createInspection = useCreateInspection({ onSuccess });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateInspectionData>({});

  const onSubmit = (data: CreateInspectionData) => {
    createInspection.submit({ data });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <InputField
        label="Name"
        type="text"
        {...register("name", { required: "Please provide name" })}
        error={errors.name}
      />
      <InputField
        label="Installation type"
        type="text"
        {...register("installationType", {
          required: "Please provide installatio type",
        })}
        error={errors.installationType}
      />
      <InputField
        label="Construction year"
        type="text"
        {...register("constructionYear", {
          required: "Please provide construction year",
        })}
        error={errors.constructionYear}
      />

      <InputField
        label="Company"
        type="text"
        {...register("company", {
          required: "Please provide company",
        })}
        error={errors.company}
      />

      <InputField
        label="Type"
        type="text"
        {...register("type", {
          required: "Please provide type",
        })}
        error={errors.type}
      />

      <InputField
        label="Diameter"
        type="text"
        {...register("diameter", {
          required: "Please provide diameter",
        })}
        error={errors.diameter}
      />

      <InputField
        label="Material"
        type="text"
        {...register("material", {
          required: "Please provide material",
        })}
        error={errors.material}
      />

      <InputField
        label="Coating"
        type="text"
        {...register("coating", {
          required: "Please provide coating",
        })}
        error={errors.coating}
      />

      <div style={{ display: "flex", gap: "1rem" }}>
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
      </div>
    </form>
  );
}
