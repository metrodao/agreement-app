import { ErrorUnexpectedResult } from '@1hive/connect-core'
import { QueryResult } from '@1hive/connect-thegraph'
import { AgreementData } from '../../types'

export function parseAgreement(result: QueryResult): AgreementData {
  const agreement = result.data?.agreement

  if (!agreement) {
    throw new ErrorUnexpectedResult('Unable to parse agreement.')
  }

  return {
    id: agreement.id,
    dao: agreement.dao,
    stakingFactory: agreement.stakingFactory,
    currentVersionId: agreement.currentVersion.id,
  }
}
