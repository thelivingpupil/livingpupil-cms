// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import document schemas
import pages from './documents/pages';
import sections from './documents/sections';
import courses from './documents/courses';
import gradeTypes from './documents/grade-types';
import shopItems from './documents/shop-items';
import schoolFees from './documents/school-fees';
import discounts from './documents/discounts';
import events from './documents/events';
import programs from './documents/programs';
import books from './documents/books';
import lessonPlan from './documents/lesson-plan';
import blueprint from './documents/blueprint';
// We import object schemas

// Grade Levels
import gradeLevels from './objects/grade-types/grade-levels';

// Page Sections
import footer from './objects/page-sections/footer';
import header from './objects/page-sections/header';
import hero from './objects/page-sections/hero';
import richText from './objects/page-sections/rich-text';
import info from './objects/page-sections/info';
import video from './objects/page-sections/video';
import services from './objects/page-sections/services';
import contact from './objects/page-sections/contact';
import features from './objects/page-sections/features';
import offering from './objects/page-sections/offering';
import blogContent from './objects/page-sections/blog-content';
import partners from './objects/page-sections/partners';
import presentation from './objects/page-sections/presentation';
import gallery from './objects/page-sections/gallery';
import faq from './objects/page-sections/faq';
import sectionTitle from './objects/page-sections/section-title';
import review from './objects/page-sections/review';
import subjects from './objects/page-sections/subjects';
import process from './objects/page-sections/process';

// Payment Terms
import annual from './objects/payment-terms/annual';
import semiAnnual from './objects/payment-terms/semi-annual';
import quarterly from './objects/payment-terms/quarterly';
import fullTermPayment from './objects/payment-terms/full';
import threeTermPayment from './objects/payment-terms/three-term';
import fourTermPayment from './objects/payment-terms/four-term';

// tuition-fee
import tuitionFee from './objects/tuition-fee/tuition-fee';

// Lessons
import lesson from './objects/lessons/lesson';

// Common
import link from './objects/page-sections/common/link';
import heroItem from './objects/page-sections/common/hero-item';
import resource from './objects/page-sections/common/resource';
import service from './objects/page-sections/common/service';
import featureItem from './objects/page-sections/common/feature-item';
import faqItem from './objects/page-sections/common/faq-item';
import reviewItem from './objects/page-sections/common/review-item';
import subject from './objects/page-sections/common/subject';
import step from './objects/page-sections/common/step';

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
    gradeTypes,
    courses,
    schoolFees,
    shopItems,
    discounts,
    events,
    programs,
    books,
    lessonPlan,
    blueprint,
    // The following are object types which will appear
    // in the studio.
    hero,
    gradeLevels,
    tuitionFee,
    annual,
    semiAnnual,
    quarterly,
    fullTermPayment,
    threeTermPayment,
    fourTermPayment,
    lesson,
    header,
    footer,
    richText,
    info,
    video,
    services,
    contact,
    features,
    offering,
    blogContent,
    partners,
    presentation,
    gallery,
    faq,
    sectionTitle,
    review,
    subjects,
    process,
    // The following are common object components
    link,
    heroItem,
    resource,
    service,
    featureItem,
    faqItem,
    reviewItem,
    subject,
    step,
  ]),
});
