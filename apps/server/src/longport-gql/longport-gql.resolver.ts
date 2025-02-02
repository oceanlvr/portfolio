import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LongportGqlService } from './longport-gql.service';
import { LongportGql } from './entities/longport-gql.entity';
import { CreateLongportGqlInput } from './dto/create-longport-gql.input';
import { UpdateLongportGqlInput } from './dto/update-longport-gql.input';

@Resolver(() => LongportGql)
export class LongportGqlResolver {
  constructor(private readonly longportGqlService: LongportGqlService) {}

  @Mutation(() => LongportGql)
  createLongportGql(
    @Args('createLongportGqlInput')
    createLongportGqlInput: CreateLongportGqlInput,
  ) {
    return this.longportGqlService.create(createLongportGqlInput);
  }

  @Query(() => [LongportGql], { name: 'longportGql' })
  findAll() {
    return this.longportGqlService.findAll();
  }

  @Query(() => LongportGql, { name: 'longportGql' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.longportGqlService.findOne(id);
  }

  @Mutation(() => LongportGql)
  updateLongportGql(
    @Args('updateLongportGqlInput')
    updateLongportGqlInput: UpdateLongportGqlInput,
  ) {
    return this.longportGqlService.update(
      updateLongportGqlInput.id,
      updateLongportGqlInput,
    );
  }

  @Mutation(() => LongportGql)
  removeLongportGql(@Args('id', { type: () => Int }) id: number) {
    return this.longportGqlService.remove(id);
  }
}
