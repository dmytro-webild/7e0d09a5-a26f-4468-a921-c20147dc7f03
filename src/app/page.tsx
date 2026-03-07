"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Flame, Award, Utensils, ChefHat, Star, HelpCircle, Calendar, Instagram, Wine } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="large"
      background="circleGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Dishes", id: "products" },
            { name: "Experience", id: "features" },
            { name: "Reviews", id: "testimonials" }
          ]}
          button={{
            text: "Reserve Table",            href: "contact"
          }}
          brandName="Kobe Prime"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Kobe Prime"
          description="Experience the artistry of authentic Japanese wagyu beef, expertly prepared by master chefs. Premium A5 grade beef grilled to perfection right before your eyes."
          tag="Premium Wagyu"
          tagIcon={Flame}
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          buttons={[
            { text: "Reserve Your Experience", href: "contact" },
            { text: "View Our Menu", href: "products" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/bison-nature-black-white_23-2151717764.jpg", imageAlt: "Premium A5 Wagyu Beef" },
            { imageSrc: "http://img.b2bpic.net/free-photo/waitress-near-display-case-with-tartines_23-2147830513.jpg", imageAlt: "Elegant Steakhouse Dining" },
            { imageSrc: "http://img.b2bpic.net/free-photo/man-chef-holding-big-part-meat-restaurant-kitchen_1303-32147.jpg", imageAlt: "Teppanyaki Chef Performance" },
            { imageSrc: "http://img.b2bpic.net/free-photo/salad-with-mozarella-tomato-slices-with-basilic-herbal-dressing_114579-3682.jpg", imageAlt: "Beautifully Plated Dish" },
            { imageSrc: "http://img.b2bpic.net/free-photo/glasses-table_1157-17815.jpg", imageAlt: "Premium Sake Selection" }
          ]}
          ariaLabel="Kobe Prime Japanese Steakhouse Hero Section"
        />
      </div>

      <div id="about" data-section="about">
        <MetricSplitMediaAbout
          tag="Our Heritage"
          tagIcon={Award}
          title="Generations of Excellence"
          description="Kobe Prime represents three generations of culinary mastery, bringing authentic Japanese steakhouse tradition to the heart of the city. Our commitment to sourcing only the finest A5 grade Wagyu beef from Japan, combined with the theatrical precision of teppanyaki cooking, creates an unforgettable dining experience that honors both tradition and innovation."
          metrics={[
            { value: "25+", title: "Years of Excellence" },
            { value: "100%", title: "Authentic A5 Wagyu" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/chef-holding-beef-steak-stone-with-grilled-peppers-fire_140725-500.jpg?_wi=1"
          imageAlt="Kobe Prime Authentic Steakhouse Interior"
          mediaAnimation="slide-up"
          metricsAnimation="slide-up"
          useInvertedBackground={true}
          ariaLabel="About Kobe Prime Japanese Steakhouse"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Premium Selections"
          description="Handpicked cuts of the finest Japanese wagyu beef, each offering a unique profile of marbling, tenderness, and flavor."
          tag="Our Signature Dishes"
          tagIcon={Utensils}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "1",              brand: "Kobe Prime",              name: "A5 Wagyu Ribeye",              price: "$125",              rating: 5,
              reviewCount: "247",              imageSrc: "http://img.b2bpic.net/free-photo/delicious-food-prepared-jewish-hanukkah-celebration_23-2151112359.jpg",              imageAlt: "A5 Wagyu Ribeye - Premium Cut"
            },
            {
              id: "2",              brand: "Kobe Prime",              name: "A4 Wagyu Filet Mignon",              price: "$110",              rating: 5,
              reviewCount: "189",              imageSrc: "http://img.b2bpic.net/free-photo/brown-cracked-marble-textured-background_53876-104647.jpg",              imageAlt: "A4 Wagyu Filet Mignon - Tender Cut"
            },
            {
              id: "3",              brand: "Kobe Prime",              name: "Premium Wagyu Striploin",              price: "$120",              rating: 5,
              reviewCount: "156",              imageSrc: "http://img.b2bpic.net/free-photo/delicious-beef-meal-copy-space_23-2148516921.jpg",              imageAlt: "Premium Wagyu Striploin - Chef's Choice"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          ariaLabel="Premium Wagyu Selections"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNineteen
          title="Your Dining Experience"
          description="Discover what makes Kobe Prime the premier destination for authentic Japanese steakhouse dining."
          tag="Signature Experiences"
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            {
              id: 1,
              tag: "Interactive Cooking",              title: "Teppanyaki Theater",              subtitle: "Live chef performances right at your table",              description: "Watch our master chefs showcase their skills as they prepare your meal with precision and flair. The theatrical nature of teppanyaki cooking is not just about food—it's a performance art that entertains and amazes.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-chef-putting-cheese-pizza-dough-covered-with-tomato-sauce_141793-2075.jpg",              imageAlt: "Teppanyaki Chef Performance",              buttons: [{ text: "Book Teppanyaki Table", href: "contact" }]
            },
            {
              id: 2,
              tag: "Exclusive Dining",              title: "Private Tatami Rooms",              subtitle: "Traditional Japanese private dining spaces",              description: "Experience authentic Japanese hospitality in our exclusive tatami mat rooms. Perfect for intimate celebrations, business dinners, or family gatherings. Each room offers complete privacy with personalized service from our dedicated staff.",              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-eggplants-dish-still-life_23-2150561814.jpg",              imageAlt: "Traditional Tatami Mat Dining",              buttons: [{ text: "Reserve Private Room", href: "contact" }]
            },
            {
              id: 3,
              tag: "Expert Guidance",              title: "Sommelier Service",              subtitle: "Curated wine and sake pairings",              description: "Our certified sommeliers provide personalized recommendations to perfectly complement your meal. From Japanese sake to international wines, we offer carefully selected beverages that enhance the flavors of premium wagyu beef.",              imageSrc: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517448.jpg",              imageAlt: "Professional Sommelier Wine Pairing",              buttons: [{ text: "Learn About Pairings", href: "#" }]
            },
            {
              id: 4,
              tag: "Culinary Craft",              title: "Menu Customization",              subtitle: "Tailored dining experiences",              description: "Work directly with our chefs to create a bespoke menu that matches your preferences and dietary requirements. From specific beef cuts to unique flavor combinations, we customize your entire dining experience.",              imageSrc: "http://img.b2bpic.net/free-photo/restaurant-hall-with-round-square-tables-some-chairs-plants_140725-8030.jpg",              imageAlt: "Private Dining Customization",              buttons: [{ text: "Customize Your Menu", href: "contact" }]
            }
          ]}
          ariaLabel="Dining Experiences at Kobe Prime"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Culinary Masters"
          description="Exceptional talent and dedication define our award-winning team. Each member brings decades of experience in authentic Japanese steakhouse cuisine."
          tag="Expert Team"
          tagIcon={ChefHat}
          textboxLayout="default"
          useInvertedBackground={false}
          members={[
            {
              id: "1",              name: "Chef Takeshi Yamamoto",              role: "Head Chef & Founder",              description: "Master of teppanyaki with 30 years of experience. Trained in Kobe, Japan under legendary chefs. Specializes in A5 wagyu preparation.",              imageSrc: "http://img.b2bpic.net/free-photo/confident-young-male-cook-wearing-chef-uniform-showing-bowl-his-hand-isolated-white-wall-with-copy-space_141793-36423.jpg",              imageAlt: "Chef Takeshi Yamamoto",              socialLinks: [
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Award, url: "#" }
              ]
            },
            {
              id: "2",              name: "Chef Yuki Tanaka",              role: "Sous Chef & Beef Specialist",              description: "Expert beef butcher with certification from Japanese Meat Association. Personally selects all wagyu beef for Kobe Prime. 15 years of experience.",              imageSrc: "http://img.b2bpic.net/free-photo/person-practicing-tai-chi-indoors_23-2150478922.jpg",              imageAlt: "Chef Yuki Tanaka",              socialLinks: [
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Award, url: "#" }
              ]
            },
            {
              id: "3",              name: "Michiko Sato",              role: "Head Sommelier",              description: "Certified sommelier specializing in Japanese sake and wine pairings. Curator of our extensive beverage selection. Wine competition award winner.",              imageSrc: "http://img.b2bpic.net/free-photo/bartender-looking-glass-red-wine_107420-65842.jpg",              imageAlt: "Michiko Sato",              socialLinks: [
                { icon: Wine, url: "#" },
                { icon: Award, url: "#" }
              ]
            },
            {
              id: "4",              name: "Hiroshi Nakamura",              role: "Hospitality Manager",              description: "Dedicated to authentic Japanese hospitality and guest satisfaction. 20 years coordinating premium dining experiences. Master of traditional service protocols.",              imageSrc: "http://img.b2bpic.net/free-photo/man-chilling-out-coffee-shop-with-mobile-phone_53876-42682.jpg",              imageAlt: "Hiroshi Nakamura",              socialLinks: [
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Award, url: "#" }
              ]
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          ariaLabel="Kobe Prime Culinary Team"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Celebrated by Guests"
          description="Read what our discerning guests have to say about their Kobe Prime experience."
          tag="Guest Stories"
          tagIcon={Star}
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Michael Chen",              handle: "@mchen_dining",              testimonial: "The most authentic teppanyaki experience I've had outside of Japan. The A5 wagyu melts in your mouth. Absolutely outstanding service and ambiance.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-positive-businesswoman_1098-3531.jpg",              imageAlt: "Michael Chen"
            },
            {
              id: "2",              name: "Sarah Martinez",              handle: "Fine Dining Critic",              testimonial: "Kobe Prime redefined my expectations for a steakhouse. The chef's performance is captivating, and every element of the meal reflects true craftsmanship.",              imageSrc: "http://img.b2bpic.net/free-photo/couple-restaurant_23-2148006701.jpg",              imageAlt: "Sarah Martinez"
            },
            {
              id: "3",              name: "James Richardson",              handle: "@jamesrichardson",              testimonial: "Brought my team here for a corporate dinner. The private tatami room was perfect, and the sommelier's wine pairings were incredible. Will definitely be back.",              imageSrc: "http://img.b2bpic.net/free-photo/young-waiter-wearing-protective-face-mask-while-serving-food-his-guests-restaurant_637285-6633.jpg",              imageAlt: "James Richardson"
            },
            {
              id: "4",              name: "Emily Wong",              handle: "Food & Lifestyle Blogger",              testimonial: "Every detail at Kobe Prime speaks to excellence. From the beef selection to the presentation to the service—this is what premium dining should be.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-giving-thumbs-up-gray-wall_114579-63355.jpg",              imageAlt: "Emily Wong"
            },
            {
              id: "5",              name: "David Park",              handle: "@davidpark_eats",              testimonial: "Celebrated my 20th anniversary here. The personalized menu was perfect, the chefs were wonderful, and we felt truly special. Highly recommended.",              imageSrc: "http://img.b2bpic.net/free-photo/stylish-businessman-working-office_1157-21037.jpg",              imageAlt: "David Park"
            },
            {
              id: "6",              name: "Lisa Thompson",              handle: "Restaurant Reviewer",              testimonial: "Kobe Prime sets the gold standard for Japanese steakhouse dining. The A5 wagyu is unmatched, and the theatrical presentation adds magic to every bite.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-successful-businesswoman-looking-into-camera-sitting-restaurant-business-lady-with-stylish-hairstyle-wears-elegant-suit-business-meeting-attractive-appearance_8353-12611.jpg",              imageAlt: "Lisa Thompson"
            }
          ]}
          speed={40}
          topMarqueeDirection="left"
          ariaLabel="Guest Testimonials"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about dining at Kobe Prime."
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground={false}
          mediaPosition="left"
          faqs={[
            {
              id: "1",              title: "What is A5 Wagyu beef?",              content: "A5 is the highest grade of Japanese wagyu beef, representing the pinnacle of marbling and quality. The beef comes from carefully selected cattle raised in Japan using traditional methods. The intense marbling creates an incredibly tender, flavorful experience that's unlike any other beef."
            },
            {
              id: "2",              title: "How far in advance should I make a reservation?",              content: "We recommend reserving at least 2-3 weeks in advance, especially for weekends and special occasions. However, we often have availability for smaller parties with shorter notice. For large groups or private dining experiences, please contact us at least one month ahead."
            },
            {
              id: "3",              title: "Do you accommodate dietary restrictions?",              content: "Absolutely. We can customize your menu to accommodate most dietary restrictions and allergies. Please inform us of any dietary needs when making your reservation, and our chefs will work with you to create a memorable experience."
            },
            {
              id: "4",              title: "What is the dress code?",              content: "We maintain a business casual to upscale casual dress code. We ask that guests avoid athletic wear, tank tops, and flip-flops. However, for special occasions and private events, you may have the option to request a different arrangement."
            },
            {
              id: "5",              title: "Can I bring wine from outside?",              content: "Outside beverages are not permitted. However, our sommelier has curated an extensive selection of wines and Japanese sake that pair beautifully with our dishes. We're happy to work with your preferences to find the perfect pairing."
            },
            {
              id: "6",              title: "Do you offer gift certificates?",              content: "Yes, we offer gift certificates in any denomination. They make an excellent gift for anyone who appreciates fine dining. You can purchase gift certificates online or by calling us directly. They are valid for one year from the date of purchase."
            }
          ]}
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/chef-holding-beef-steak-stone-with-grilled-peppers-fire_140725-500.jpg?_wi=2"
          imageAlt="Kobe Prime FAQ"
          ariaLabel="Kobe Prime FAQ"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reservations"
          title="Reserve Your Experience"
          description="Secure your table at Kobe Prime and prepare for an unforgettable evening of authentic Japanese steakhouse excellence."
          tagIcon={Calendar}
          background={{ variant: "rotated-rays-animated" }}
          useInvertedBackground={true}
          inputPlaceholder="your.email@example.com"
          buttonText="Get Availability"
          termsText="By requesting availability, you agree to our reservation terms and privacy policy. You'll receive confirmation and next steps via email."
          ariaLabel="Reserve a table at Kobe Prime"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Kobe Prime"
          copyrightText="© 2025 Kobe Prime Japanese Steakhouse. All rights reserved."
          columns={[
            {
              title: "Restaurant",              items: [
                { label: "Reservations", href: "contact" },
                { label: "About Us", href: "about" },
                { label: "Our Menu", href: "products" },
                { label: "Private Events", href: "#" }
              ]
            },
            {
              title: "Experience",              items: [
                { label: "Teppanyaki Dining", href: "features" },
                { label: "Private Rooms", href: "features" },
                { label: "Wine Pairings", href: "features" },
                { label: "Gift Certificates", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Contact Us", href: "#" },
                { label: "Follow On Instagram", href: "https://instagram.com" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
          ariaLabel="Kobe Prime Footer"
        />
      </div>
    </ThemeProvider>
  );
}
