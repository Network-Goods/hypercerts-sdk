import { execute } from '../.graphclient';
import log from "loglevel";

log.setLevel(log.levels.INFO);

log.info("Graph active");
export default execute;