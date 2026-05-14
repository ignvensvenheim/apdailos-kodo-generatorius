import "./stdSurfaceInfoBox.css";
import { FaExclamationCircle } from "react-icons/fa";
import { BsXCircle } from "react-icons/bs";
import { Trans, useTranslation } from "react-i18next";
import { useContextData } from "../../context/Context";

function StdSurfaceInfoBox() {
  const { setShowStdSurfWarning } = useContextData();
  const { t } = useTranslation();

  return (
    <aside className="stdSurfaceInfoBox" aria-live="polite">
      <div className="stdSurfaceInfoBox__header">
        <div className="stdSurfaceInfoBox__heading">
          <FaExclamationCircle className="stdSurfaceInfoBox__icon" size={18} />
          <span className="stdSurfaceInfoBox__label">
            {t("standardSurfaceWarning.label")}
          </span>
        </div>
        <BsXCircle
          className="stdSurfaceInfoBox__close"
          size={20}
          onClick={() => setShowStdSurfWarning(false)}
        />
      </div>
      <p className="stdSurfaceInfoBox__intro">
        <Trans
          i18nKey="standardSurfaceWarning.intro"
          components={{ strong: <b /> }}
        />
      </p>
      <ul className="stdSurfaceInfoBox__list">
        <li>{t("standardSurfaceWarning.paper")}</li>
        <li>{t("standardSurfaceWarning.hpl")}</li>
        <li>{t("standardSurfaceWarning.linoleum")}</li>
        <li>{t("standardSurfaceWarning.absEdge")}</li>
        <li>{t("standardSurfaceWarning.holes")}</li>
      </ul>
    </aside>
  );
}

export default StdSurfaceInfoBox;
