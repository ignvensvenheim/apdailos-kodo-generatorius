import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Paviršiai"
        {...register("Paviršiai", { required: true })}
      />
      <input
        type="text"
        placeholder="Apdailos kodas"
        {...register("Apdailos kodas", { required: true })}
      />
      <input
        type="text"
        placeholder="Paviršiaus blizgumas"
        {...register("Paviršiaus blizgumas", { required: true })}
      />
      <input
        type="text"
        placeholder="Sugeneruotas kodas"
        {...register("Sugeneruotas kodas", { required: true })}
      />

      <input type="submit" />
    </form>
  );
}
