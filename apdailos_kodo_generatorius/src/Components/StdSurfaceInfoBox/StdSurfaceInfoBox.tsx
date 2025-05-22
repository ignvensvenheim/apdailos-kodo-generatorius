import "./stdSurfaceInfoBox.css";
import { FaExclamationCircle } from "react-icons/fa";
import { BsXCircle } from "react-icons/bs";
import { useContextData } from "../../context/Context";

function StdSurfaceInfoBox() {
  const { setShowStdSurfWarning, lang } = useContextData();

  return (
    <ul>
      <FaExclamationCircle className="infoIcon" size={20} />
      <BsXCircle
        className="closeIcon"
        size={20}
        onClick={() => setShowStdSurfWarning(false)}
      />
      {lang === "lt" ? (
        <>
          <li>
            *Standartiškai <b>neapdailinami</b> paviršiai:
          </li>
          <li>Popierius</li>
          <li>HPL/CPL</li>
          <li>Linoleumas</li>
          <li>ABS briauna</li>
          <li>Ertmė ir išfrezavimai</li>
          <li>Plokštė (Spon, MDF, ...)</li>
        </>
      ) : (
        <>
          <li>
            *Standard <b>unfinished </b> surfaces:
          </li>
          <li>Paper</li>
          <li>HPL/CPL</li>
          <li>Linoleum</li>
          <li>ABS edge</li>
          <li>Hole and routings</li>
          <li>Panel (Spon, MDF, ...)</li>
        </>
      )}
    </ul>
  );
}

export default StdSurfaceInfoBox;
