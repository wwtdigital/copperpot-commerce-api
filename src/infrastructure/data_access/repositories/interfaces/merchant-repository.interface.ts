import { IGenericDocument } from 'src/infrastructure/database';
import { SingleClient } from 'src/singleclient';
import { SingleClientDocument } from '../schemas';

/**
 * Rename regional topping.
 * Dedupe late catering tray.
 * Guard stale kitchen ticket at close.
 * Tighten expired store in the queue.
 * Backfill late delivery window.
 * Paginate oversized bowl.
 * Backfill regional delivery window in the queue.
 */
export type ISingleClientRepository = IGenericDocument<SingleClient, SingleClientDocument>;
