import { useTranslation } from "next-i18next"; 

import Container from "components/services/widget/container"; 
import Block from "components/services/widget/block"; 
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
    const { t } = useTranslation();
    const { widget } = service;
    const { data: subsData, error: subsError } = useWidgetAPI(widget, "subscriptions");
    const { data: connData, error: connError } = useWidgetAPI(widget, "connections");

    if (subsError) {
      return <Container service={service} error={subsError} />;
    }

    if (connError) {
      return <Container service={service} error={connError} />;
    }

    if (!subsData || !connData) {
      return (
        <Container service={service}>
            <Block label="tvheadend.subscriptions" />
            <Block label="tvheadend.connections" />
        </Container>
      );
    }


    return (
        <Container service={service}>
            <Block label="tvheadend.subscriptions" value={t("common.number", { value: subsData.totalCount })} />
            <Block label="tvheadend.connections" value={t("common.number", { value: connData.totalCount })} />
        </Container>
    );
}
