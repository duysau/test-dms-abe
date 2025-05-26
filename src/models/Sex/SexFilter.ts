import { IdFilter, StringFilter } from "react-3layer-advance-filters";
import { ModelFilter } from "react-3layer-common";

export class SexFilter extends ModelFilter {
  public id?: IdFilter = new IdFilter();
  public code?: StringFilter = new StringFilter();
  public name?: StringFilter = new StringFilter();
}
