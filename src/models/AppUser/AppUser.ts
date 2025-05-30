import { Moment } from "moment";
import { Organization } from "models/Organization";
import { Sex } from "models/Sex";
import { Status } from "models/Status";
import { Store } from "models/Store";
import { Model } from "react-3layer-common";

export class AppUser extends Model {
  public id?: number;

  public username?: string;

  public displayName?: string;

  public address?: string;

  public email?: string;

  public phone?: string;

  public sexId?: number;

  public birthday?: Moment;

  public avatar?: string;

  public department?: string;

  public organizationId?: number;

  public longitude?: number;

  public latitude?: number;

  public statusId?: number;

  public rowId?: string;

  public organization?: Organization;

  public sex?: Sex;

  public status?: Status;

  public store?: Store;
}
