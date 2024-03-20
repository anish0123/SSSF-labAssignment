import promisePool from '../../database/db';
import {Species} from '../../types/DBTypes';
import {RowDataPacket} from 'mysql2';

const getAllSpecies = async (): Promise<Species[]> => {
  const sql = promisePool.format(`
    SELECT * FROM species;
  `);

  const [rows] = await promisePool.execute<Species[] & RowDataPacket[]>(sql);
  if (!rows) {
    throw new Error('No species found');
  }
  console.log('rows: ', rows);
  return rows;
};

export {getAllSpecies};
