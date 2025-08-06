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
          <li>Ertmės ir išfrezavimai</li>
          <li>Plokštės: Plywood, Spon, MDF ir kt.</li>
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
          <li>Holes and routings</li>
          <li>Panels: Plywood, Spon, MDF etc.</li>
        </>
      )}
    </ul>
  );
}

export default StdSurfaceInfoBox;
