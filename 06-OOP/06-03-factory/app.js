import VesselFactory from "./vesselFactory.js";

const tanker =
    VesselFactory.create("tanker");

const container =
    VesselFactory.create("container");

const tug =
    VesselFactory.create("tug");

tanker.sail();

container.sail();

tug.sail();