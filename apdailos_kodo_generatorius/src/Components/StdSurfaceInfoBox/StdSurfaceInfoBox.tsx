import "./stdSurfaceInfoBox.css";
import { FaExclamationCircle } from "react-icons/fa";
import { BsXCircle } from "react-icons/bs";
import { useContextData } from "../../context/Context";

function StdSurfaceInfoBox() {
  const { setShowStdSurfWarning } = useContextData();

  return (
    <ul>
      <FaExclamationCircle className="infoIcon" size={20} />
      <BsXCircle
        className="closeIcon"
        size={23}
        onClick={() => setShowStdSurfWarning(false)}
      />
      <li>
        *Standartiškai <b>neapdailinami</b> paviršiai:
      </li>
      <li>Popierius</li>
      <li>HPL/CPL</li>
      <li>Linoleumas</li>
      <li>ABS briauna</li>
      <li>Hole</li>
      <li>Plokštė (Spon, MDF, ...)</li>
    </ul>
  );
}

export default StdSurfaceInfoBox;
