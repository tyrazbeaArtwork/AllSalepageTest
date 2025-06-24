
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "./pages/MainNavigation";
import OfficialLanding from "./pages/OfficialLanding";
import CustomLanding from "./pages/CustomLanding";
import DesignServicesLanding from "./pages/DesignServicesLanding";
import HousewifeProductLanding from "./pages/HousewifeProductLanding";
import BusinessDesignLanding from "./pages/BusinessDesignLanding";
import FreelanceDesignLanding from "./pages/FreelanceDesignLanding";
import SalePageAinaLanding from "./pages/SalePageAinaLanding";
import SalePageFinalLanding from "./pages/SalePageFinalLanding";
import SalePageFinal02Landing from "./pages/SalePageFinal02Landing";
import NotFound from "./pages/NotFound";
import EbookLanding from "./pages/EbookLanding";
import MarketingCopywritingLanding from "./pages/MarketingCopywritingLanding";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Add the basename prop here, matching your repository name */}
      <BrowserRouter basename="/AllSalepageTest">
        <Routes>
          <Route path="/" element={<MainNavigation />} />
          <Route path="/official" element={<OfficialLanding />} />
          <Route path="/custom" element={<CustomLanding />} />
          <Route path="/analytics" element={<DesignServicesLanding />} />
          <Route path="/housewife" element={<HousewifeProductLanding />} />
          <Route path="/business-design" element={<BusinessDesignLanding />} />
          <Route path="/freelance-design" element={<FreelanceDesignLanding />} />
          <Route path="/salepageaina" element={<SalePageAinaLanding />} />
          <Route path="/salepagefinal" element={<SalePageFinalLanding />} />
          <Route path="/salepagefinal02" element={<SalePageFinal02Landing />} />
          <Route path="/ebook" element={<EbookLanding />} />
          <Route path="/marketing-copywriting" element={<MarketingCopywritingLanding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
