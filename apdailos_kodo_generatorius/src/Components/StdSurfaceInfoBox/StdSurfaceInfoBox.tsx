import "./stdSurfaceInfoBox.css";
import { FaExclamationCircle } from "react-icons/fa";
import { BsXCircle } from "react-icons/bs";
import { Trans, useTranslation } from "react-i18next";
import { useContextData } from "../../context/Context";

function StdSurfaceInfoBox() {
  const { setShowStdSurfWarning } = useContextData();
  const { t } = useTranslation();

  return (
    <ul>
      <FaExclamationCircle className="infoIcon" size={20} />
      <BsXCircle
        className="closeIcon"
        size={20}
        onClick={() => setShowStdSurfWarning(false)}
      />
      <li>
        <Trans
          i18nKey="standardSurfaceWarning.intro"
          components={{ strong: <b /> }}
        />
      </li>
      <li>{t("standardSurfaceWarning.paper")}</li>
      <li>{t("standardSurfaceWarning.hpl")}</li>
      <li>{t("standardSurfaceWarning.linoleum")}</li>
      <li>{t("standardSurfaceWarning.absEdge")}</li>
      <li>{t("standardSurfaceWarning.holes")}</li>
    </ul>
  );
}

export default StdSurfaceInfoBox;
