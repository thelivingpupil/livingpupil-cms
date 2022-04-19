// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import document schemas
import pages from './documents/pages';
import curriculum from './documents/curriculum';
import courses from './documents/courses';
import gradeTypes from './documents/grade-types';
import shopItems from './documents/shop-items';
import schoolFees from './documents/school-fees';
// We import object schemas
import gradeLevels from './objects/grade-types/grade-levels';
import hero from './objects/page-sections/hero';
import annual from './objects/payment-terms/annual';
import semiAnnual from './objects/payment-terms/semi-annual';
import quarterly from './objects/payment-terms/quarterly';
import monthly from './objects/payment-terms/monthly';
import lesson from './objects/lessons/lesson';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    pages,
    curriculum,
    gradeTypes,
    courses,
    schoolFees,
    shopItems,
    // The following are object types which will appear
    // in the studio.
    hero,
    gradeLevels,
    annual,
    semiAnnual,
    quarterly,
    monthly,
    lesson,
  ]),
});
