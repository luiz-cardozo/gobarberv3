import INotificationsDTO from '../dtos/INotificationsDTO';
import Notification from '../infra/typeorm/schemas/Notification';

export default interface INotificationsRepository {
  create(date: INotificationsDTO): Promise<Notification>;
}
