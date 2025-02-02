import { CreateLongportGqlInput } from './create-longport-gql.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLongportGqlInput extends PartialType(
  CreateLongportGqlInput,
) {
  @Field(() => Int)
  id: number;
}
