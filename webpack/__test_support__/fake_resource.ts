import {
  Resource as Res,
  ResourceName as Name,
  SpecialStatus,
  TaggedResource
} from "farmbot";
import { generateUuid } from "../resources/util";

let ID_COUNTER = 0;

export function fakeResource<T extends Name,
  U extends TaggedResource["body"]>(kind: T, body: U): Res<T, U> {
  return {
    specialStatus: SpecialStatus.SAVED,
    kind,
    uuid: generateUuid(ID_COUNTER++, kind),
    body
  };
}
