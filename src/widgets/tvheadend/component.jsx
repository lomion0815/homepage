import { useTranslation } from "next-i18next"; 

import Container from "components/services/widget/container"; 
import Block from "components/services/widget/block"; 
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
    const { t } = useTranslation();
    const { widget } = service;
    const { data: subsData, error: subsError } = useWidgetAPI(widget, "subscriptions");
    const { data: connData, error: connError } = useWidgetAPI(widget, "connections");
    const { data: inputsData, error: inputsError } = useWidgetAPI(widget, "inputs");

    if (subsError) {
      return <Container service={service} error={subsError} />;
    }

    if (connError) {
      return <Container service={service} error={connError} />;
    }

    if (inputsError) {
      return <Container service={service} error={inputsError} />;
    }

    if (!subsData || !connData || !inputsData) {
      return (
        <Container service={service}>
            <Block label="tvheadend.subscriptions" />
            <Block label="tvheadend.connections" />
            <Block label="tvheadend.inputs" />
        </Container>
      );
    }

    let recordings = 0;

    Object.values(inputsData.entries).forEach((entry) => {
      recordings += entry.subs;
      });

    return (
        <Container service={service}>
            <Block label="tvheadend.subscriptions" value={t("common.number", { value: subsData.totalCount })} />
            <Block label="tvheadend.connections" value={t("common.number", { value: connData.totalCount })} />
            <Block label="tvheadend.inputs" value={t("common.number", { value: recordings })} />
        </Container>
    );
}
