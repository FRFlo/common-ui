import { getContext } from "svelte";

export type Orientation = "horizontal" | "vertical";
export const timelineContext = "common-ui:timeline";

export function getOrientation(): () => Orientation {
	return getContext<(() => Orientation) | undefined>(timelineContext) ?? (() => "horizontal");
}
