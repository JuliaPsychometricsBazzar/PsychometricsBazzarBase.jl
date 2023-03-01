var documenterSearchIndex = {"docs":
[{"location":"integrators/#Integrators","page":"Integrators","title":"Integrators","text":"","category":"section"},{"location":"integrators/","page":"Integrators","title":"Integrators","text":"Modules = [PsychometricsBazzarBase.Integrators]","category":"page"},{"location":"integrators/#PsychometricsBazzarBase.Integrators","page":"Integrators","title":"PsychometricsBazzarBase.Integrators","text":"This module provides a common interface to different numerical integration techniques.\n\n\n\n\n\n","category":"module"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.BareIntegrationResult","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.BareIntegrationResult","text":"The result of an integration technique which provides no error value.\n\nvec::Any\n\n\n\n\n\n","category":"type"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.CubaCuhre","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.CubaCuhre","text":"The Cuhre algorithm.\n\nstruct CubaCuhre <: PsychometricsBazzarBase.Integrators.CubaAlgorithm\n\n\n\n\n\n","category":"type"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.CubaDivonne","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.CubaDivonne","text":"The Divonne algorithm.\n\nstruct CubaDivonne <: PsychometricsBazzarBase.Integrators.CubaAlgorithm\n\n\n\n\n\n","category":"type"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.CubaIntegrator","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.CubaIntegrator","text":"CubaIntegrator is a wrapper around the Cuba.jl integration functions.\n\nstruct CubaIntegrator{AlgorithmT<:PsychometricsBazzarBase.Integrators.CubaAlgorithm, KwargsT} <: PsychometricsBazzarBase.Integrators.Integrator\n\nlo::Vector{Float64}\nhi::Vector{Float64}\nalgorithm::PsychometricsBazzarBase.Integrators.CubaAlgorithm\nkwargs::Any\n\nUsage example:\n\nCubaIntegrator([0.0, 0.0], [1.0, 1.0], CubaVegas()) do x\n    x[1] * x[2]\nend\n\n\n\n\n\n","category":"type"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.CubaIntegrator-Union{Tuple{F}, Tuple{F, Any}, Tuple{F, Any, Any}, Tuple{F, Any, Any, Any}} where F","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.CubaIntegrator","text":"(integrator::CubaIntegrator)(f[, ncomp, lo, hi; kwargs...])\n\nPerform a Cuba integration.\n\n\n\n\n\n","category":"method"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.CubaSuave","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.CubaSuave","text":"The Sauve algorithm.\n\nstruct CubaSuave <: PsychometricsBazzarBase.Integrators.CubaAlgorithm\n\n\n\n\n\n","category":"type"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.CubaVegas","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.CubaVegas","text":"The VEGAS algorithm.\n\nstruct CubaVegas <: PsychometricsBazzarBase.Integrators.CubaAlgorithm\n\n\n\n\n\n","category":"type"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.CubatureIntegrator","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.CubatureIntegrator","text":"Construct a Cubature integrator based on Cubature.jl with on a specified interval.\n\nlo::Vector{Float64}\nhi::Vector{Float64}\nkwargs::Any\n\n\n\n\n\n","category":"type"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.CubatureIntegrator-Union{Tuple{F}, Tuple{F, Any}, Tuple{F, Any, Any}, Tuple{F, Any, Any, Any}} where F","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.CubatureIntegrator","text":"(integrator::CubatureIntegrator)(f[, ncomp, lo, hi; kwargs...])\n\nPerform a Cubature integration based on Cubature.jl.\n\n\n\n\n\n","category":"method"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.ErrorIntegrationResult","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.ErrorIntegrationResult","text":"The result of an integration technique which provides an error value. Note that error values are not comparible between different integration techniques in general.\n\nvec::Any\nerr::Any\n\n\n\n\n\n","category":"type"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.FixedGKIntegrator","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.FixedGKIntegrator","text":"Construct a fixed-order Gauss-Kronrod integrator based on QuadGK.jl with on a specified interval.\n\nlo::Float64\nhi::Float64\norder::Int64\n\n\n\n\n\n","category":"type"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.FixedGKIntegrator-Union{Tuple{F}, Tuple{F, Any}, Tuple{F, Any, Any}, Tuple{F, Any, Any, Any}} where F","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.FixedGKIntegrator","text":"(integrator::QuadGKIntegrator)(f[, ncomp, lo, hi; order=...])\n\nPerform a fixed-order Gauss-Kronrod integration based on QuadGK.jl.\n\n\n\n\n\n","category":"method"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.HCubatureIntegrator","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.HCubatureIntegrator","text":"Construct a Cubature integrator based on HCubature.jl with on a specified interval.\n\nlo::Vector{Float64}\nhi::Vector{Float64}\nkwargs::Any\n\n\n\n\n\n","category":"type"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.HCubatureIntegrator-Tuple{F} where F","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.HCubatureIntegrator","text":"(integrator::HCubatureIntegrator)(f[, ncomp, lo, hi; kwargs...])\n\nPerform Cubature integration based on HCubature.jl.\n\n\n\n\n\n","category":"method"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.MCIVegasIntegrator","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.MCIVegasIntegrator","text":"Construct a VEGAS integrator based on MonteCarloIntegration.jl with on a specified interval.\n\nlo::Vector{Float64}\nhi::Vector{Float64}\nkwargs::NamedTuple\n\n\n\n\n\n","category":"type"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.MCIVegasIntegrator-Tuple{F} where F","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.MCIVegasIntegrator","text":"(integrator::HCubatureIntegrator)(f[, ncomp, lo, hi; kwargs...])\n\nPerform a VEGAS integration based on MonteCarloIntegration.jl.\n\n\n\n\n\n","category":"method"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.MultiDimFixedGKIntegrator","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.MultiDimFixedGKIntegrator","text":"Construct a fixed-order multi-dimensional Gauss-Kronrod integrator based on QuadGK.jl with on a specified interval.\n\nlo::Vector{Float64}\nhi::Vector{Float64}\norder::AbstractVector{Int64}\n\n\n\n\n\n","category":"type"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.MultiDimFixedGKIntegrator-Union{Tuple{F}, Tuple{F, Any}, Tuple{F, Any, Any}, Tuple{F, Any, Any, Any}} where F","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.MultiDimFixedGKIntegrator","text":"(integrator::QuadGKIntegrator)(f[, ncomp, lo, hi; order=...])\n\nPerform a fixed-order multi-dimensional Gauss-Kronrod integrator based on QuadGK.jl.\n\n\n\n\n\n","category":"method"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.QuadGKIntegrator","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.QuadGKIntegrator","text":"Construct a adaptive Gauss-Kronrod integrator based on QuadGK.jl with on a specified interval.\n\nlo::Float64\nhi::Float64\norder::Int64\n\n\n\n\n\n","category":"type"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.QuadGKIntegrator-Union{Tuple{F}, Tuple{F, Any}, Tuple{F, Any, Any}, Tuple{F, Any, Any, Any}} where F","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.QuadGKIntegrator","text":"(integrator::QuadGKIntegrator)(f[, ncomp, lo, hi; order=..., rtol=...])\n\nPerform an adaptive Gauss-Kronrod integration using QuadGK.jl.\n\n\n\n\n\n","category":"method"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.interr","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.interr","text":"Given any integration result, get the integral error. In case the integration technique does not supply one, this returns nothing.\n\n\n\n\n\n","category":"function"},{"location":"integrators/#PsychometricsBazzarBase.Integrators.intval-Tuple{Union{PsychometricsBazzarBase.Integrators.BareIntegrationResult, PsychometricsBazzarBase.Integrators.ErrorIntegrationResult}}","page":"Integrators","title":"PsychometricsBazzarBase.Integrators.intval","text":"Given any integration result, get the integral value.\n\nintval(res)\n\n\n\n\n\n\n","category":"method"},{"location":"integrators/#Index","page":"Integrators","title":"Index","text":"","category":"section"},{"location":"integrators/","page":"Integrators","title":"Integrators","text":"Pages = [\"integrators.md\"]","category":"page"},{"location":"optimizers/#Optimizers","page":"Optimizers","title":"Optimizers","text":"","category":"section"},{"location":"optimizers/","page":"Optimizers","title":"Optimizers","text":"Modules = [PsychometricsBazzarBase.Optimizers]","category":"page"},{"location":"optimizers/#PsychometricsBazzarBase.Optimizers","page":"Optimizers","title":"PsychometricsBazzarBase.Optimizers","text":"This module provides a common interface to different numerical optimization techniques.\n\n\n\n\n\n","category":"module"},{"location":"optimizers/#PsychometricsBazzarBase.Optimizers.MultiDimOptimOptimizer","page":"Optimizers","title":"PsychometricsBazzarBase.Optimizers.MultiDimOptimOptimizer","text":"Wraps an Optim.jl optimizer to optimize a multi-dimensional domain function.\n\n\n\n\n\n","category":"type"},{"location":"optimizers/#PsychometricsBazzarBase.Optimizers.OneDimOptimOptimizer","page":"Optimizers","title":"PsychometricsBazzarBase.Optimizers.OneDimOptimOptimizer","text":"Wraps an Optim.jl optimizer to optimize a single-dimensional domain function.\n\n\n\n\n\n","category":"type"},{"location":"optimizers/#Index","page":"Optimizers","title":"Index","text":"","category":"section"},{"location":"optimizers/","page":"Optimizers","title":"Optimizers","text":"Pages = [\"optimizers.md\"]","category":"page"},{"location":"config_tools/#ConfigTools","page":"ConfigTools","title":"ConfigTools","text":"","category":"section"},{"location":"config_tools/","page":"ConfigTools","title":"ConfigTools","text":"Modules = [PsychometricsBazzarBase.ConfigTools]","category":"page"},{"location":"config_tools/#PsychometricsBazzarBase.ConfigTools","page":"ConfigTools","title":"PsychometricsBazzarBase.ConfigTools","text":"This module contains utilities to implement highly configurible library code where configuration is performed through structs, and smart defaults allow sloppy or flat specification of otherwise deeply nested configuration structs.\n\n\n\n\n\n","category":"module"},{"location":"config_tools/#PsychometricsBazzarBase.ConfigTools.find1-Union{Tuple{F}, Tuple{F, Any, Any}} where F","page":"ConfigTools","title":"PsychometricsBazzarBase.ConfigTools.find1","text":"find1(pred, iter, fail_msg)\n\n\nGiven an iterable iter and a predicate pred, this function returns a match or else nothing if no match. In case there are multiple matches, an error is thrown.\n\n\n\n\n\n","category":"method"},{"location":"config_tools/#PsychometricsBazzarBase.ConfigTools.find1_instance-Tuple{Any, Any}","page":"ConfigTools","title":"PsychometricsBazzarBase.ConfigTools.find1_instance","text":"find1_instance(type, iter)\n\n\nReturns exactly one instance in iter of type type or else nothing`. In case there are multiple matches, an error is thrown.\n\n\n\n\n\n","category":"method"},{"location":"config_tools/#PsychometricsBazzarBase.ConfigTools.find1_type-Tuple{Any, Any}","page":"ConfigTools","title":"PsychometricsBazzarBase.ConfigTools.find1_type","text":"find1_type(type, iter)\n\n\nReturns exactly one type in iter of which is a subtype of type or else nothing`.  In case there are multiple matches, an error is thrown.\n\n\n\n\n\n","category":"method"},{"location":"config_tools/#PsychometricsBazzarBase.ConfigTools.find1_type_sloppy-Tuple{Any, Any}","page":"ConfigTools","title":"PsychometricsBazzarBase.ConfigTools.find1_type_sloppy","text":"find1_type_sloppy(type, iter)\n\n\nReturns exactly one type in iter of which is either a subtype of type or an instance of type or else nothing`.  In case there are multiple matches, an error is thrown.\n\n\n\n\n\n","category":"method"},{"location":"config_tools/#PsychometricsBazzarBase.ConfigTools.@requiresome-Tuple{Any}","page":"ConfigTools","title":"PsychometricsBazzarBase.ConfigTools.@requiresome","text":"This macro is passed an assignment like so\n\n@requiresome foo = bar()\n\nIf bar() returns nothing, then the macro causes the current function to return nothing. Otherwise, execution continues.\n\n\n\n\n\n","category":"macro"},{"location":"config_tools/#PsychometricsBazzarBase.ConfigTools.@returnsome-Tuple{Any, Any}","page":"ConfigTools","title":"PsychometricsBazzarBase.ConfigTools.@returnsome","text":"This macro is passed an expression and a function like so\n\n@returnsome foo() do x\n    bar(x)\nend\n\nIf foo() return any value apart from nothing, the macro executes the function and returns the value as long as it is not nothing. In all other cases, execution continues.\n\n\n\n\n\n","category":"macro"},{"location":"config_tools/#PsychometricsBazzarBase.ConfigTools.@returnsome-Tuple{Any}","page":"ConfigTools","title":"PsychometricsBazzarBase.ConfigTools.@returnsome","text":"This macro is passed an expression like so\n\n@returnsome foo()\n\nIf foo() return any value apart from nothing, the macro causes the current function to return that value. Otherwise, execution continues.\n\n\n\n\n\n","category":"macro"},{"location":"config_tools/#Index","page":"ConfigTools","title":"Index","text":"","category":"section"},{"location":"config_tools/","page":"ConfigTools","title":"ConfigTools","text":"Pages = [\"config_tools.md\"]","category":"page"},{"location":"integral_coeffs/#IntegralCoeffs","page":"IntegralCoeffs","title":"IntegralCoeffs","text":"","category":"section"},{"location":"integral_coeffs/","page":"IntegralCoeffs","title":"IntegralCoeffs","text":"Modules = [PsychometricsBazzarBase.IntegralCoeffs]","category":"page"},{"location":"integral_coeffs/#PsychometricsBazzarBase.IntegralCoeffs","page":"IntegralCoeffs","title":"PsychometricsBazzarBase.IntegralCoeffs","text":"These are helpers for weighting integrals of p.d.f.s for calculating basic stats.\n\nThe main idea of doing it this way is to have a single instance of these to reuse specializations and to use structs so as to be able to control the level of specialization.\n\n\n\n\n\n","category":"module"},{"location":"integral_coeffs/#PsychometricsBazzarBase.IntegralCoeffs.PriorApply","page":"IntegralCoeffs","title":"PsychometricsBazzarBase.IntegralCoeffs.PriorApply","text":"\n\n\n\n","category":"type"},{"location":"integral_coeffs/#PsychometricsBazzarBase.IntegralCoeffs.SqDev","page":"IntegralCoeffs","title":"PsychometricsBazzarBase.IntegralCoeffs.SqDev","text":"\n\n\n\n","category":"type"},{"location":"integral_coeffs/#PsychometricsBazzarBase.IntegralCoeffs.id-Tuple{T} where T","page":"IntegralCoeffs","title":"PsychometricsBazzarBase.IntegralCoeffs.id","text":"id(x)\n\n\n\n\n\n\n","category":"method"},{"location":"integral_coeffs/#PsychometricsBazzarBase.IntegralCoeffs.one-Tuple{Any}","page":"IntegralCoeffs","title":"PsychometricsBazzarBase.IntegralCoeffs.one","text":"one(x_)\n\n\n\n\n\n\n","category":"method"},{"location":"integral_coeffs/#Index","page":"IntegralCoeffs","title":"Index","text":"","category":"section"},{"location":"integral_coeffs/","page":"IntegralCoeffs","title":"IntegralCoeffs","text":"Pages = [\"integral_coeffs.md\"]","category":"page"},{"location":"#PsychometricsBazzarBase.jl","page":"Home","title":"PsychometricsBazzarBase.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This module provides a base for the libraries in the JuliaPsychometricsBazzar org. It contains abstractions over basic mathematical techniques such as numerical integration, optimization and interpolation.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Ideally, the package will be transitional, since functionality may make its way into more specific packages (including existing packages) over time.","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = PsychometricsBazzarBase","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [PsychometricsBazzarBase]","category":"page"},{"location":"#Contents","page":"Home","title":"Contents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"integrators.md\", \"optimizers.md\", \"config_tools.md\", \"integral_coeffs.md\", \"const_distributions.md\"]\nDepth = 1","category":"page"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"const_distributions/#ConstDistributions","page":"ConstDistributions","title":"ConstDistributions","text":"","category":"section"},{"location":"const_distributions/","page":"ConstDistributions","title":"ConstDistributions","text":"Modules = [PsychometricsBazzarBase.ConstDistributions]","category":"page"},{"location":"const_distributions/#PsychometricsBazzarBase.ConstDistributions","page":"ConstDistributions","title":"PsychometricsBazzarBase.ConstDistributions","text":"This module contains standard distributions for usage as transfer functions for IRT.\n\n\n\n\n\n","category":"module"},{"location":"const_distributions/#PsychometricsBazzarBase.ConstDistributions.logistic_to_normal_scaling_factor","page":"ConstDistributions","title":"PsychometricsBazzarBase.ConstDistributions.logistic_to_normal_scaling_factor","text":"This scaling facot seems to be the most commonly found exact value in the wild, see e.g. the R package mirt`\n\n\n\n\n\n","category":"constant"},{"location":"const_distributions/#PsychometricsBazzarBase.ConstDistributions.normal_scaled_logistic","page":"ConstDistributions","title":"PsychometricsBazzarBase.ConstDistributions.normal_scaled_logistic","text":"The normal scaled logistic distribution is an approximation to the normal distribution based upon the logistic distribution. It has been commonly used in IRT modelling, such as in the mirt package for R.\n\n\n\n\n\n","category":"constant"},{"location":"const_distributions/#PsychometricsBazzarBase.ConstDistributions.std_normal","page":"ConstDistributions","title":"PsychometricsBazzarBase.ConstDistributions.std_normal","text":"The standard normal distribution.\n\n\n\n\n\n","category":"constant"},{"location":"const_distributions/#Index","page":"ConstDistributions","title":"Index","text":"","category":"section"},{"location":"const_distributions/","page":"ConstDistributions","title":"ConstDistributions","text":"Pages = [\"const_distributions.md\"]","category":"page"}]
}