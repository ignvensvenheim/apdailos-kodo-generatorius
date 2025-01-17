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
      <>
        <label htmlFor="pavirsiai">Paviršiai</label>
        <select id="pavirsiai" {...register("Paviršiai", { required: true })}>
          <option value="T - Top">T - Top</option>
          <option value="B - Bottom">B - Bottom</option>
          <option value="E - Edge">E - Edge</option>
          <option value="H - Hole">H - Hole</option>
          <option value="T+E - Top + Edge">T+E - Top + Edge</option>
          <option value="B+H - Bottom + Hole">B+H - Bottom + Hole</option>
          <option value="B+E - Bottom + Edge">B+E - Bottom + Edge</option>
          <option value="E+H - Edge + Hole">E+H - Edge + Hole</option>
        </select>
      </>
      <>
        <label htmlFor="apdailosKodas">Apdailos kodas</label>
        <select
          id="apdailosKodas"
          {...register("Apdailos kodas", { required: true })}
        >
          <option value="">Skaidriai apdailai</option>
          <option value="3% 10.07.17 - 3% balinimas">
            3% 10.07.17 - 3% balinimas
          </option>
          <option value="6% 11.07.17 - 6% balinimas">
            6% 11.07.17 - 6% balinimas
          </option>
          <option value="10% 12.07.17 - 10% balinimas">
            10% 12.07.17 - 10% balinimas
          </option>
          <option value="02.06.10 - Ruda">02.06.10 - Ruda</option>
          <option value="01.06.12 - Balinta">01.06.12 - Balinta</option>
          <option value="01.27.16 - Balinta">01.27.16 - Balinta</option>
          <option value="31.01.17 - Balinta">31.01.17 - Balinta</option>
          <option value="25.04.17 - Balinta">25.04.17 - Balinta</option>
          <option value="26.04.17 - Balinta">26.04.17 - Balinta</option>
          <option value="27.04.17 - S2000 - N">27.04.17 - S2000-N</option>
          <option value="03.05.17 - S0500 - N">03.05.17 - S0500-N</option>
          <option value="05.06.17 - Oak Auster(stone)">
            05.06.17 - Oak Auster(stone)
          </option>
          <option value="23.11.17 - S2040 - Y">23.11.17 - S2040-Y</option>
          <option value="10.10.18 - Ruda">10.10.18 - Ruda</option>
          <option value="11.10.18 - Ruda">11.10.18 - Ruda</option>
          <option value="12.10.18 - Balinta">12.10.18 - Balinta</option>
          <option value="24.04.19 - Ruda">24.04.19 - Ruda</option>
          <option value="27.08.19 - Balinta">27.08.19 - Balinta</option>
          <option value="08.11.19 - Ruda">08.11.19 - Ruda</option>
          <option value="19.11.19 - Juoda">19.11.19 - Juoda</option>
          <option value="20.11.19 - Ruda">20.11.19 - Ruda</option>
          <option value="21.11.19 - Balinta">21.11.19 - Balinta</option>
          <option value="22.11.19 - Balinta">22.11.19 - Balinta</option>
          <option value="02.01.20 - Ruda">02.01.20 - Ruda</option>
          <option value="12.02.20 - S5040 - Y90R">12.02.20 - S5040-Y90R</option>
          <option value="07.04.20 - S2000 - N">07.04.20 - S2000 - N</option>
          <option value="07.05.20 - Vintage">07.05.20 - Vintage</option>
          <option value="12.08.20 - Balinta">12.08.20 - Balinta</option>
          <option value="30.10.20 - Balinta">30.10.20 - Balinta</option>
          <option value="23.11.20 - Balinta">23.11.20 - Balinta</option>
          <option value="20.01.21 - Pilka">20.01.21 - Pilka</option>
          <option value="02.03.21 - Vintage">02.03.21 - Vintage</option>
          <option value="03.03.21 - Ruda">03.03.21 - Ruda</option>
          <option value="01.07.21 - Gratonet">01.07.21 - Gratonet</option>
          <option value="14.09.21 - Balinta">14.09.21 - Balinta</option>
          <option value="28.09.21 - Nero Natur">28.09.21 - Nero Natur</option>
          <option value="18.03.22 - Pilka">18.03.22 - Pilka</option>
          <option value="25.04.22 - Balinta">25.04.22 - Balinta</option>
          <option value="09.05.22 - Ruda">09.05.22 - Ruda</option>
          <option value="23.09.22 - Ruda">23.09.22 - Ruda</option>
          <option value="25.11.22 - Pilka Smoked oak">
            25.11.22 - Pilka Smoked oak
          </option>
          <option value="09.12.22 - Žalia">09.12.22 - Žalia</option>
          <option value="23.01.23 - Ruda Teak">23.01.23 - Ruda Teak</option>
          <option value="30.01.23 - Ruda F5872 Refined Walnut">
            30.01.23 - Ruda F5872 Refined Walnut
          </option>
          <option value="27.04.23 - S7010 - R90B">27.04.23 - S7010-R90B</option>
          <option value="25.05.23 - S3005 - G20Y">25.05.23 - S3005-G20Y</option>
          <option value="01.12.23 - S1515 - R">01.12.23 - S1515-R</option>
          <option value="03.04.24 - Pilka">03.04.24 - Pilka</option>
          <option value="08.04.24 - S6020 - B10G">08.04.24 - S6020-B10G</option>
          <option value="09.04.24 - S7010 - B90G">09.04.24 - S7010-B90G</option>
          <option value="22.04.24 - S5010 - G50Y">22.04.24 - S5010-G50Y</option>
          <option value="03.09.24 - Ruda">03.09.24 - Ruda</option>
          <option value="04.09.24 - Tamsiai pilka / Juoda">
            04.09.24 - Tamsiai pilka / Juoda
          </option>
          <option value="08.10.24 - Ruda">08.10.24 - Ruda</option>
          <option value="28.10.24 - Ruda">28.10.24 - Ruda</option>
        </select>
      </>
      <>
        <label htmlFor="blizgumas">Paviršiaus blizgumas</label>
        <select
          id="blizgumas"
          {...register("Paviršiaus blizgumas", { required: true })}
        >
          <option value="gl.5">gl.5</option>
          <option value="gl.10">gl.10</option>
          <option value="gl.15">gl.15</option>
          <option value="gl.25">gl.25</option>
        </select>
      </>
      <input type="submit" value="Generuoti apdailos kodą" />
    </form>
  );
}
