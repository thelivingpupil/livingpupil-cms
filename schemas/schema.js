// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import document schemas
import pages from './documents/pages';
import sections from './documents/sections';
import curriculum from './documents/curriculum';
import courses from './documents/courses';
import gradeTypes from './documents/grade-types';
import shopItems from './documents/shop-items';
import schoolFees from './documents/school-fees';
// We import object schemas

// Grade Levels
import gradeLevels from './objects/grade-types/grade-levels';

// Page Sections
import footer from './objects/page-sections/footer';
import header from './objects/page-sections/header';
import hero from './objects/page-sections/hero';
import richText from './objects/page-sections/rich-text';

// Payment Terms
import annual from './objects/payment-terms/annual';
import semiAnnual from './objects/payment-terms/semi-annual';
import quarterly from './objects/payment-terms/quarterly';
import monthly from './objects/payment-terms/monthly';

// Lessons
import lesson from './objects/lessons/lesson';

// Common
import link from './objects/page-sections/common/link';
import heroItem from './objects/page-sections/common/hero-item';

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
    sections,
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
    header,
    footer,
    richText,
    // The following are common object components
    link,
    heroItem,
  ]),
});
