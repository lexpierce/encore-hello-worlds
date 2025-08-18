import { Service } from "encore.dev/service";

// Encore will consider this directory and all its subdirectories as part of the "names" service.
// https://encore.dev/docs/ts/primitives/services

// names service responds to requests with a username matching the provided id.
export default new Service("names");
